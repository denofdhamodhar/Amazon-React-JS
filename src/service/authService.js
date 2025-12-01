// authentication api call done here
// login and user me call done here


import axiosInstance from "../axios/axiosInstance";
import { API_END_POINTS } from "../constants/endPoints"

export const createAccount = async(data) => {
    return await axiosInstance.post(API_END_POINTS.CREATEACCOUNT, data); 
}