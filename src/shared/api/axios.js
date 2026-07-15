import axios from "axios";
import { getAccessToken } from "@/shared/auth/token";

export const api = axios.create({
  baseURL: "http://localhost:8080/deutsch-hub/api/v1",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = getAccessToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
