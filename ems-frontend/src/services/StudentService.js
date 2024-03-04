import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/v1/products";

export const listProduct = async () => {
    return await axios.get(REST_API_BASE_URL);
}

export const addProduct = async (student) => {
    return await axios.post(REST_API_BASE_URL, student);
}