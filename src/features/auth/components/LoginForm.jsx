import { useState } from "react";
import useLogin from "../hooks/useLogin";

export default function LoginForm() {
  const { handleLogin } = useLogin();

  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onSubmit(e) {
    e.preventDefault();

    await handleLogin({
      usernameOrEmail,
      password,
    });
  }

  return (
    <form onSubmit={onSubmit}>
      <h1>Login</h1>

      <input
        placeholder="Username or Email"
        value={usernameOrEmail}
        onChange={(e) => setUsernameOrEmail(e.target.value)}
      />

      <br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />

      <button type="submit">Login</button>
    </form>
  );
}
