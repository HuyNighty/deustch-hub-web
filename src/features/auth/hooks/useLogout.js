import { useNavigate } from "react-router-dom";

import { logout } from "../services/auth.service";

import { getRefreshToken, clearTokens } from "@/shared/auth/token";

export default function useLogout() {
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      const refreshToken = getRefreshToken();

      if (refreshToken) {
        await logout(refreshToken);
      }
    } catch (error) {
      console.error(error);
    } finally {
      clearTokens();

      navigate("/login", {
        replace: true,
      });
    }
  }

  return {
    handleLogout,
  };
}
