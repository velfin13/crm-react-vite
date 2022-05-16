import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getClientByIdAPI } from "../api/clientes";
import Formulario from "../components/Formulario";

const EditarCliente = () => {
  const { id } = useParams();
  const [cliente, setCliente] = useState({});
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    setCargando(true);
    getClientByIdAPI(id).then((res) => {
      setCliente(res ?? {});
      setCargando(false);
    });
  }, []);
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Editar Cliente</h1>
      <p className="mt-3">Formulario de Edición</p>
      <Formulario cliente={cliente} />
    </>
  );
};

export default EditarCliente;
