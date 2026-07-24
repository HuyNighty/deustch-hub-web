import apiClient from "@/shared/api/api-client";

export function register(request) {
  return apiClient.post("/auth/register", request);
}
