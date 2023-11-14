import { BASE_API } from '../utils/constants'


export const loginApi = async (formValue) => {

    const url = `${BASE_API}/api/auth/login`;
    const params = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formValue),
    };

    const response = await fetch(url, params);

    if (response.status !== 200) {
        throw "Error al iniciar sesion";
    }

    const result = await response.json();

    return result;

};