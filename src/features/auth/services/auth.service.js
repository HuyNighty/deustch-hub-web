import apiClient from "@/shared/api/api-client";

export function refresh(refreshToken) {
  return apiClient.post("/auth/refresh", { refreshToken });
}

export function logout(refreshToken) {
  return apiClient.post("/auth/logout", { refreshToken });
}
