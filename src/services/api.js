import axios from 'axios';

const api = axios.create({
  //baseURL: "http://localhost:3333"
  baseURL: "https://lu-teperino-arq-backend.herokuapp.com"
});

export default api;