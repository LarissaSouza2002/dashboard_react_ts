import axios from 'axios';

const api = axios.create({
    baseURL: 'https://site-pessoal-api-ii2n.onrender.com/api',
});

export default api;