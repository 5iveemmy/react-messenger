import React, { useContext } from "react";
import { AuthContext } from "../context/auth";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
