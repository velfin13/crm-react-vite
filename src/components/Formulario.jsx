import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import Alerta from "../components/Alerta";
import { useNavigate } from "react-router-dom";
import { createClientAPI } from "../api/clientes";

const Formulario = ({ cliente }) => {
  const navigate = useNavigate();

  const nuevoClienteSchema = Yup.object().shape({
    nombre: Yup.string()
      .required("Campo requerido")
      .max(20, "Nombre muy largo")
      .min(3, "El nombre es muy corto"),
    empresa: Yup.string().required("Campo requerido"),
    email: Yup.string().required("Campo requerido").email("Email invalido"),
    telefono: Yup.number()
      .typeError("El numero no es valido")
      .integer("El numero no es valido")
      .positive("El numero no es valido"),
  });

  const initialValues = {
    nombre: cliente?.nombre ?? "",
    empresa: cliente?.empresa ?? "",
    email: cliente?.email ?? "",
    telefono: cliente?.telefono ?? "",
    notas: cliente?.notas ?? "",
  };

  const handleSubmit = async (values, { resetForm }) => {
    createClientAPI(values).then((data) => {
      if (data) {
        resetForm();
        navigate("/clientes");
      }
    });
  };

  return (
    <div className="mt-10 bg-white px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
      <h1 className="text-gray-600 font-bold text-xl uppercase text-center">
        {cliente?.nombre ? "Editar Registro" : "Nuevo Regitro"}
      </h1>

      <Formik
        initialValues={initialValues}
        enableReinitialize={true}
        onSubmit={handleSubmit}
        validationSchema={nuevoClienteSchema}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="mb-4">
              <label className="text-gray-800 font-bold" htmlFor="nombre">
                Nombre
              </label>
              <Field
                id="nombre"
                name="nombre"
                placeholder="Ingresa el Nombre"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-200"
              />

              {errors.nombre && touched.nombre ? (
                <Alerta>{errors.nombre}</Alerta>
              ) : null}
            </div>

            <div className="mb-4">
              <label className="text-gray-800 font-bold" htmlFor="empresa">
                Empresa
              </label>
              <Field
                name="empresa"
                id="empresa"
                placeholder="Empresa el Cliente"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-200"
              />
              {errors.empresa && touched.empresa ? (
                <Alerta>{errors.empresa}</Alerta>
              ) : null}
            </div>

            <div className="mb-4">
              <label className="text-gray-800 font-bold" htmlFor="email">
                Email
              </label>
              <Field
                name="email"
                id="email"
                placeholder="Ingresa el email"
                type="email"
                className="mt-2 block w-full p-3 bg-gray-200"
              />
              {errors.email && touched.email ? (
                <Alerta>{errors.email}</Alerta>
              ) : null}
            </div>

            <div className="mb-4">
              <label className="text-gray-800 font-bold" htmlFor="telefono">
                Telefono
              </label>
              <Field
                id="telefono"
                name="telefono"
                placeholder="Ingresa el # telefono"
                type="tel"
                className="mt-2 block w-full p-3 bg-gray-200"
              />
              {errors.telefono && touched.telefono ? (
                <Alerta>{errors.telefono}</Alerta>
              ) : null}
            </div>

            <div className="mb-4">
              <label className="text-gray-800 font-bold" htmlFor="notas">
                Notas
              </label>
              <Field
                as="textarea"
                id="notas"
                name="notas"
                placeholder="Notas"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-200 h-40"
              />
            </div>

            <input
              type="submit"
              value={cliente?.nombre ? "Editar Registro" : "Agregar Regitro"}
              className="mt-5 w-full bg-blue-600 p-3 text-white uppercase font-bold text-lg rounded-md cursor-pointer transition-shadow hover:bg-blue-800"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

Formulario.defaultProps = {
  cliente: {},
};

export default Formulario;
