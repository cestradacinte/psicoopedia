import { Button } from 'semantic-ui-react';
import { useAuth } from "../../../utils/useAuth";
import { useNavigate } from 'react-router-dom';
export const DashboardAdmin = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const cerrarSesion = () => {
    logout();
    navigate("/admin");
  }


  return (
    <>
      <div>DashboardAdmin</div>

      <Button onClick={cerrarSesion}>Cerrar sesion</Button>
    </>
  );
};
