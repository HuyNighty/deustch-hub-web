import { getAccessToken } from "@/shared/auth/token";

export function useAuth() {
  const token = getAccessToken();

  return {
    isAuthenticated: !!token,
    accessToken: token,
  };
}
