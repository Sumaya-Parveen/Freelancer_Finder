import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify({ email }));
    alert("Logged in successfully ✅");
    navigate("/");
  };

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h1>Login 🔑</h1>
      <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "15px", maxWidth: "400px", margin: "20px auto" }}>
        <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required />
        <button type="submit" style={{ padding: "10px", background: "#ff416c", color: "white", border: "none", borderRadius: "10px" }}>Login</button>
      </form>
    </div>
  );
}

export default Login;
