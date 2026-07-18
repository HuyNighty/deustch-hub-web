import { api } from "@/shared/api/axios";
import { getRefreshToken } from "@/shared/auth/token";

export async function login(request) {
  const response = await api.post("/auth/login", request);

  return response.data.result;
}

export async function refresh(refreshToken) {
  const response = await api.post("/auth/refresh", {
    refreshToken,
  });

  return response.data.result;
}

export async function logout() {
  const refreshToken = getRefreshToken();

  return await api.post("/auth/logout", {
    refreshToken,
  });
}
