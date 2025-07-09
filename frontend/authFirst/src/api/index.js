import axios from "axios";

export const APIINSTANCE = axios.create({
  baseURL: "https://some-domain.com/api/",
  timeout: 1000,
});
