import axios from "axios";
const axiosInstance = axios.create({
  withCredentials: false,
  baseURL: 'http://127.0.0.1:8000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': '*/*',
    'Access-Control-Allow-Origin':'*',
    
  }
});
axiosInstance.interceptors.request.use(
  (request) => {
    let token = localStorage.getItem('token');
    if (request.headers)
      if (token) request.headers.Authorization = `Bearer ${token}`;
    return request;
  },
  error => {
    throw error;
  },
);
// Add a response interceptor
axiosInstance.interceptors.response.use(
  res => {
    return res;
  },
  err => {
    console.log(err)
    return err;
  },
);
export { axiosInstance }