import axios from "axios";

export const APIINSTANCE = axios.create({
  baseURL: "http://localhost:5000/",
  timeout: 5000,
});

// Add request interceptor to include token
APIINSTANCE.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
