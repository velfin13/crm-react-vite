import React, { useEffect, useState } from "react";
import Cliente from "../components/Cliente";
import { getClientAPI, deleteClientByIdAPI } from "../api/clientes";
import Swal from "sweetalert2";

const Inicio = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    getClientAPI().then((res) => {
      setClientes(res ?? []);
    });
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Deseas eliminar este cliente?",
      text: "Una vez eliminado no se podra recuperar!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si!",
      cancelButtonText: "cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteClientByIdAPI(id).then((res) => {
          if (res?.status === 200) {
            Swal.fire("Eliminado!", "Eliminado correctamente.", "success");
            let nuevoArray = clientes.filter((cliente) => cliente.id !== id);
            setClientes(nuevoArray);
          } else {
            Swal.fire("Ups!", "Ocurrio un error al eliminar.", "error");
          }
        });
      }
    });
  };

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
      <p className="mt-3">Gestiona tus clientes</p>
      <table className="w-full mt-5 table-auto shadow bg-white">
        <thead className="bg-blue-800 text-white">
          <tr>
            <th className="p-2">Nombre</th>
            <th className="p-2">Contacto</th>
            <th className="p-2">Empresa</th>
            <th className="p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <Cliente
              handleDelete={handleDelete}
              key={cliente.id}
              cliente={cliente}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Inicio;
