import React from "react";
import { useNavigate } from "react-router-dom";

const Cliente = ({ cliente }) => {
  const navigate = useNavigate();

  return (
    <tr className="text-center border-b hover:bg-gray-100">
      <td className="p-2">{cliente.nombre}</td>
      <td className="p-2">{cliente.email}</td>
      <td className="p-2">{cliente.empresa}</td>
      <td className="p-2">
        <button
          type="button"
          className="bg-yellow-600 hover:bg-yellow-800 text-white uppercase w-full block rounded-md hover:cursor-pointer p-1 mb-2 text-xs"
          onClick={() => navigate(`/clientes/${cliente.id}`)}
        >
          Ver
        </button>
        <button
          type="button"
          className="bg-blue-600 hover:bg-blue-800 text-white uppercase w-full block rounded-md hover:cursor-pointer p-1 mb-2 text-xs"
        >
          Editar
        </button>
        <button
          className="bg-red-600 hover:bg-red-800 text-white uppercase w-full block rounded-md hover:cursor-pointer p-1 mb-2 text-xs"
          type="button"
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Cliente;
