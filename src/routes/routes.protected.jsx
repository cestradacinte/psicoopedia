/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { useAuth } from "../utils/useAuth"; 
export const ProtectedRoute = ({ component: Component, layout: Layout }) => {
  const { authToken } = useAuth();

  if (!authToken) {
    return <Navigate to="/admin" replace />;
  }

  return (
    <Layout>
      <Component />
    </Layout>
  );
};
