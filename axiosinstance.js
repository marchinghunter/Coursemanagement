import axios from "axios";

const axiosInst = axios.create({
    baseURL:import.meta.env.VITE_API_BASE_URL,
    withCredentials: true,
})
export default axiosInst;