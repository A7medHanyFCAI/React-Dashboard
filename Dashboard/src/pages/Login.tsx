import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "../styles/login.scss";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const autherized = login(username.trim(), password);
    if (autherized) {
      navigate("/dashboard");
    } else {
      setError("Invalid credentials. Try admin / admin123");
    }
  };

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={handleSubmit}>
        <h2 className="title">React Dashboard — Login</h2>

        <label>
          Username
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="admin"
          />
        </label>

        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="admin123"
          />
        </label>

        {error && <div className="error">{error}</div>}

        <button type="submit" className="btn">
          Login
        </button>

        <div className="hint">Try username: <b>admin</b> and password: <b>admin123</b></div>
      </form>
    </div>
  );
};

export default Login;
