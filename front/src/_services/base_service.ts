import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:3000/api', 
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
});

api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const token = localStorage.getItem('token');
        if(token){
            if (error.response.status === 401) {
                localStorage.removeItem('token');
                window.location.replace('/login'); 
            }
        }
       
        return Promise.reject(error);
    }
);

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);