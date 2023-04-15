import axios from "axios";

const api = axios.create({
  baseURL: "/api/v1",
  maxBodyLength: 100000000,
  maxContentLength: 100000000,
});

export default api;
