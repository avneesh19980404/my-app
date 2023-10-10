import axios from 'axios';

// Create a function that creates and configures an Axios instance
const createApiService = (baseURL, defaultOptions = {}) => {
  const apiService = axios.create({
    baseURL: baseURL,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
    ...defaultOptions, // Merge default options with custom options
  });

  // Request interceptor
  apiService.interceptors.request.use(
    (config) => {
      // Modify request configuration as needed
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Response interceptor
  apiService.interceptors.response.use(
    (response) => {
      // Handle successful responses here
      return response;
    },
    (error) => {
      // Handle response errors here
      console.error('API response error:', error);
      return Promise.reject(error);
    }
  );

  return apiService;
};

export default createApiService;
