import axios from 'axios';

const urlNode = 'http://localhost:3333';
const urlPHP = 'http://localhost/CursoRocketseat/OmniStack/backend-php';

const api = axios.create({
    baseURL: urlPHP,
})

export default api;