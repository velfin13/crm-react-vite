import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getClientByIdAPI } from "../api/clientes";

const VerCliente = () => {
  const parametros = useParams();
  const [cliente, setCliente] = useState({});
  const [cargando, setCargando] = useState(false);
  const { id } = parametros;

  useEffect(() => {
    setCargando(true);
    getClientByIdAPI(id).then((res) => {
      setCliente(res ?? {});
      setCargando(false);
    });
  }, []);

  console.log(Object.keys(cliente) === 0);

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">
        Detalles del Cliente
      </h1>
      <div className="mt-8">
        <p className="text-2xl text-gray-700">
          <span className="uppercase font-bold text-gray-800">Cliente: </span>{" "}
          {cliente.nombre}
        </p>

        <p className="text-2xl text-gray-700">
          <span className="uppercase font-bold text-gray-800">Email: </span>{" "}
          {cliente.email}
        </p>

        <p className="text-2xl text-gray-700">
          <span className="uppercase font-bold text-gray-800">Empresa: </span>{" "}
          {cliente.empresa}
        </p>

        {cliente.telefono && (
          <p className="text-2xl text-gray-700">
            <span className="uppercase font-bold text-gray-800">
              Telefono:{" "}
            </span>{" "}
            {cliente.telefono}
          </p>
        )}

        {cliente.notas && (
          <p className="text-2xl text-gray-700">
            <span className="uppercase font-bold text-gray-800">Notas: </span>{" "}
            {cliente.notas}
          </p>
        )}
      </div>
    </>
  );
};

export default VerCliente;
