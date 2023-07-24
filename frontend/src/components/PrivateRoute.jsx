import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import React from "react";
import { toast } from "react-toastify";

const PrivateRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);
  if (!userInfo) toast.error("please log in to visit this url");
  return userInfo ? <Outlet /> : <Navigate to={"/login"} replace />;
};

export default PrivateRoute;
