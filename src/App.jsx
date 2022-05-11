import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./layouts/Login";
import Layout from "./layouts/Layout";
import Inicio from "./pages/Inicio";
import FormularioLogin from "./pages/FormularioLogin";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}>
          <Route index element={<FormularioLogin />} />
        </Route>
        <Route path="/clientes" element={<Layout />}>
          <Route index element={<Inicio />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
