import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../services/auth.service";
import { saveAccessToken } from "@/shared/auth/token";

function useLogin() {
  const navigate = useNavigate();
  const location = useLocation();

  async function handleLogin(request) {
    const session = await login(request);
    saveAccessToken(session.accessToken);

    const redirectTo = location.state?.redirectTo || "/account";

    navigate(redirectTo, { replace: true });
  }

  return {
    handleLogin,
  };
}

export default useLogin;
