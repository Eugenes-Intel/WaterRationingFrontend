import axios from "axios";

const baseURL = "https://localhost:5001/api/waterrationingsystem";

const axiosConfig = {
  headers: {
    "Content-Type": "application/json",
    scope: "suburbs",
  },
};

const client = axios.create({
  baseURL: baseURL,
  headers: axiosConfig.headers,
});

export const get = async (data) => await client.get();

export const post = async (data) => await client.post(baseURL, data, axiosConfig);
