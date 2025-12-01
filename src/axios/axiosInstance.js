import axios from "axios";
import { API_CONFIG } from "../constants/api";

let axiosInstance = axios.create({
    baseURL : API_CONFIG.BASE_URL,
    timeout : API_CONFIG.TIMEOUT
})

axiosInstance.interceptors.request.use((req) => {
    let token = localStorage.getItem(API_CONFIG.TOKEN);
    if(token){
        req.headers[API_CONFIG.AUTHORIZATION]  = `${API_CONFIG.BEARER} ${token}`;
    }
    return req
})

axiosInstance.interceptors.response.use(
    (res) => {
        return res
    }, 
    (error) => {
        return Promise.reject(error)
    }
)

export default axiosInstance;