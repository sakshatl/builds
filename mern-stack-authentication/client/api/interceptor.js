import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8081/api'
});

// axiosInstance.defaults.headers.common['Authorization'] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZvb0BiYXIuY29tIiwiaWF0IjoxNzAwNTc3Mzc5LCJleHAiOjE3MDA1ODA5Nzl9.pCNfx6kBsF_-5w6Ht4sNTVTdvv-Ddka1YibEaEeXE24";

axiosInstance.interceptors.response.use(
  (response) => {
    // If there is success response, return the response
    return response;
  },
  (error) => {
    if(error.response && error.response.status === 401) {
      window.location.href = "/login";
    }
  }
);

export default axiosInstance;