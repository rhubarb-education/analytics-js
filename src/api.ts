import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

if (process.env.NODE_ENV !== 'production') {
    console.log('Development mode enabled.');
}

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: false,
});

export default api;
