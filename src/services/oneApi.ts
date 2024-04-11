
import { getEnviroments } from '@/helpers/getEnviroments';
import axios from 'axios'

const { VITE_BASE_URL } = getEnviroments();


const oneApi = axios.create({
    baseURL: VITE_BASE_URL,
});

// agroApi.interceptors.request.use( (config)=>{
//     const token = localStorage.getItem("token") || ""
//     config.headers.Authorization = token;
//     config.headers["x-token"] = token;
//     return config
// });

export default oneApi
