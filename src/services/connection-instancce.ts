import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const BASE_URL: string = 'https://api.github.com';

const ConnectionInstance: AxiosInstance = axios.create({
  timeout: 20000,
  baseURL: BASE_URL,
});

ConnectionInstance.interceptors.request.use(
  (request: AxiosRequestConfig) => {
    // console.info('API request:', request);
    return request;
  },
  error => {
    // console.error('API request error:', error);
    return error;
  }
);

ConnectionInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // console.info('API response:', response);
    return response?.data;
  },
  error => {
    // console.error('API response error:', error);
    return { message: error?.response?.data?.message };
  }
);

export default ConnectionInstance;
