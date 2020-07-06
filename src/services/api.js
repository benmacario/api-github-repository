import axios from 'axios'; // axios serve para realizar a requisição a api
// usada do lugar do (fetchAPI)

const api = axios.create({
  baseURL: 'https://api.github.com/repos/',
});

export default api;
