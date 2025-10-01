import axios from "axios";
require("dotenv").config();

const API = axios.create({
  baseURL: `${process.env.BASE_URL}/api`,
});

API.interceptors.request.use((req) => {
  const token = sessionStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
