import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { BASE_URL } from 'constants/index';

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
    return response;
  },
  error => {
    // console.error('API response error:', error);
    return { message: error?.response?.data?.message };
  }
);

export default ConnectionInstance;
