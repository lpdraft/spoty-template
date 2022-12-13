import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./Auth/context/AuthContext";

export const PublicRouter = ({ children }) => {
  const { logged } = useContext(AuthContext);
  //   Si es disto al false
  return !logged ? children : <Navigate to="/home" />;
};
