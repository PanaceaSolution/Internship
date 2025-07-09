import axios from "axios";

export const APIINSTANCE = axios.create({
  baseURL: "http://localhost:5000/",
  timeout: 1000,
});
