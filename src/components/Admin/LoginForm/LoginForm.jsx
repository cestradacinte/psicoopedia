import { useFormik } from "formik";
import { useAuth } from "../../../utils/useAuth";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "semantic-ui-react";
import { loginApi } from "../../../api/user";
import * as Yup from "yup";

export const LoginForm = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formValue) => {
      try {
        const response = await loginApi(formValue);
        console.log(response);
        localStorage.setItem("token", response.access);
        login(response.access);
        navigate("/admin/dashboard");
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Input
          name="username"
          placeholder="Nombre de usuario"
          onChange={formik.handleChange}
          error={formik.errors.username}
        />
        <Form.Input
          name="password"
          placeholder="Contraseña"
          onChange={formik.handleChange}
          error={formik.errors.password}
        />
        <Button type="submit" content="Iniciar sesion" basic color="blue" />
      </Form>
    </>
  );
};

const initialValues = () => {
  return {
    username: "",
    password: "",
  };
};

const validationSchema = () => {
  return {
    username: Yup.string().required(true),
    password: Yup.string().required(true),
  };
};
