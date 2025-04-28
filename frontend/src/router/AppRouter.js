import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import * as Router from "./RouteNames";
import Home from "../pages/Home";
import LoginForm from "../components/Auth/LoginForm";
import RegisterForm from "../components/Auth/RegisterForm";
import Error404 from "../pages/404";

function AppRouter() {
  return (
    <Routes>
      <Route
        path={Router.HOME}
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route path={Router.AUTH + Router.LOGIN} element={<LoginForm />} />
      <Route path={Router.AUTH + Router.REGISTER} element={<RegisterForm />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default AppRouter;
