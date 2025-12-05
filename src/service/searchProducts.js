// https://dummyjson.com/products/search?q=make

import axiosInstance from "../axios/axiosInstance";
import { API_END_POINTS } from "../constants/endPoints";

export const productSearch = async(keyword) => {
    return await axiosInstance.get(`${API_END_POINTS.SEARCH_PRODUCT}?q=${keyword}`); 
} 