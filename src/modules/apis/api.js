import axios from "axios";

const baseURL = "https://localhost:5001/api/waterrationingsystem";

export const get = async (data) => await axios.get(baseURL, data.axiosConfig);

export const getWith = async (data) => await axios.get(baseURL, data.axiosConfig);

export const post = async (data) => await axios.post(baseURL, data.data, data.axiosConfig);
