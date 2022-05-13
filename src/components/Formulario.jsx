import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import Alerta from "../components/Alerta";

const Formulario = () => {
  const nuevoClienteSchema = Yup.object().shape({
    nombre: Yup.string()
      .required("Campo requerido")
      .max(20, "Nombre muy largo")
      .min(3, "El nombre es muy corto"),
    empresa: "",
    email: "",
    telefono: "",
    notas: "",
  });

  const initialValues = {
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    notas: "",
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="mt-10 bg-white px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
      <h1 className="text-gray-600 font-bold text-xl uppercase text-center">
        Agregar Cliente
      </h1>

      <Formik
        initialValues={initialValues}
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
                className="mt-2 block w-full p-3 bg-red-50"
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
                className="mt-2 block w-full p-3 bg-red-50"
              />
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
                className="mt-2 block w-full p-3 bg-red-50"
              />
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
                className="mt-2 block w-full p-3 bg-red-50"
              />
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
                className="mt-2 block w-full p-3 bg-red-50 h-40"
              />
            </div>

            <input
              type="submit"
              value={"Agregar cliente"}
              className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg rounded-md"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Formulario;
