import axios from "axios";

const axiosInstanceFormData = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

axiosInstanceFormData.interceptors.request.use(
  (config) => {
    const usrToken = localStorage.getItem("token");
    if (usrToken) {
      config.headers.Authorization = `Bearer ${usrToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// -----------------------------------------------------------------------

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const usrToken = localStorage.getItem("token");
    if (usrToken) {
      config.headers.Authorization = `Bearer ${usrToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// -----------------------------------------------------------------------

export const getCity = async () => {
  return axiosInstance.get("/api/v1/city");
};

