import apiClient from "@/shared/api/api-client";

export function login(request) {
  return apiClient.post("/auth/login", request);
}
