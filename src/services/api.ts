import axios from "axios";

const api = axios.create({
  baseURL: "https://projetoatualizadoapi.herokuapp.com/api",
  headers: {
    'Content-Type': 'application/json',
  }
})

export default api;