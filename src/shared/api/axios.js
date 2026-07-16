import axios from "axios";
import {
  getAccessToken,
  getRefreshToken,
  saveAccessToken,
  saveRefreshToken,
  clearTokens,
} from "@/shared/auth/token";

import { refresh } from "@/features/auth/services/auth.service";

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

api.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = getRefreshToken();

        if (!refreshToken) {
          clearTokens();

          return Promise.reject(error);
        }

        const session = await refresh(refreshToken);

        saveAccessToken(session.accessToken);
        saveRefreshToken(session.refreshToken);

        originalRequest.headers.Authorization = `Bearer ${session.accessToken}`;

        return api(originalRequest);
      } catch (refreshError) {
        clearTokens();

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);
