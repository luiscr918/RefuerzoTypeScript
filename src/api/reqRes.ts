import axios from "axios";
//constante qu  captura la conexión a la API  la general es decir la principal
export const reqResApi=axios.create({
    baseURL:'https://reqres.in/api',
});