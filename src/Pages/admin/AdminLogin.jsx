/** @format */

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/admin/add");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const correctLogin = "Abdullox";
    const correctPassword = "Abdullox17";
    if (login === correctLogin && password === correctPassword) {
      console.log(login);
      localStorage.setItem("admin", "true");
      localStorage.setItem(
        "token",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5Z2Frcmp3bmd5emlqa29namRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDExOTA5MTAsImV4cCI6MjA1Njc2NjkxMH0.mbb6EZb0Aj6kBOXZzgaQxsWCDG9vrMXWL8OXVrZ7BPI",
      );
      setTimeout(() => {}, 1000);
      navigate("/admin/add");
    } else {
      setError("Login yoki parol noto‘g‘ri!");
      return;
    }
  };

  return (
    <div className="admin-login">
      <form onSubmit={handleSubmit} className="admin-form">
        <h2>Admin Login</h2>

        {error && <p className="error">{error}</p>}

        <input
          type="text"
          placeholder="Admin Login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />

        <input
          type="password"
          placeholder="Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
