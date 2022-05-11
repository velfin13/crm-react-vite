import { Outlet } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1>desde login</h1>
      <Outlet />
    </div>
  );
};

export default Login;
