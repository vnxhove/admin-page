import axios from "axios";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}/api`,
});

API.interceptors.request.use((req) => {
  const token = sessionStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
