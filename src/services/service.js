import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://dummyjson.com/',
  timeout: 400,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

const request = async config => {
  return config;
};

const response = response => {
  return Promise.resolve(response.data);
};

const error = async error => {
  const originalRequest = error.config;
  if (error.response.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true;
    try {
      return instance(originalRequest);
    } catch (e) {
      console.log('err', e);
    }
  }
  return Promise.reject(error);
};

axios.interceptors.request.use(request, error);
axios.interceptors.response.use(response, error);
