import { Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "../src/pages/Login/index";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const MainRouter = () => {
  return (
    <>
      <Routes>
        {/* Login Router-Logic */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login path="/*" element={<Login />} />
            </PublicRoute>
          }
        />

        {/* Scarf Router-Logic */}
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <App />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};
