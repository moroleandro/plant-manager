import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.237.79:3333",
});

export default api;
