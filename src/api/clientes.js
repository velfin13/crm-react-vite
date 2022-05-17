export const createClientAPI = async (data) => {
  try {
    // const url = `${import.meta.env.VITE_BASE_URL}/clientes`;
    const url = `${import.meta.env.VITE_BASE_URL}/clientes`;
    const respuesta = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const resultado = await respuesta.json();
    return resultado;
  } catch (error) {
    console.log(error);
  }
};

export const editClientAPI = async (data, id) => {
  try {
    const url = `${import.meta.env.VITE_BASE_URL}/clientes/${id}`;
    const respuesta = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const resultado = await respuesta.json();
    return resultado;
  } catch (error) {
    console.log(error);
  }
};

export const getClientAPI = async () => {
  try {
    const url = `${import.meta.env.VITE_BASE_URL}/clientes`;
    const respuesta = await fetch(url);

    const resultado = await respuesta.json();
    return resultado;
  } catch (error) {
    console.log(error);
  }
};

export const getClientByIdAPI = async (id) => {
  try {
    const url = `${import.meta.env.VITE_BASE_URL}/clientes/${id}`;
    const respuesta = await fetch(url);

    const resultado = await respuesta.json();
    return resultado;
  } catch (error) {
    console.log(error);
  }
};

export const deleteClientByIdAPI = async (id) => {
  try {
    const url = `${import.meta.env.VITE_BASE_URL}/clientes/${id}`;
    const respuesta = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
