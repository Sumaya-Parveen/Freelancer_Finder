import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const linkStyle = {
    textDecoration: "none",
    color: "white",
    padding: "10px 15px",
    borderRadius: "10px",
    transition: "0.3s",
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 50px",
      background: "rgba(29,38,113,0.7)",  // glass effect
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid rgba(255,255,255,0.2)",
      position: "sticky",
      top: 0,
      zIndex: 100
    }}>
      <div style={{ fontSize: "24px", fontWeight: "bold", color: "white" }}>Freelancer Finder</div>

      <div style={{ display: "flex", gap: "15px" }}>
        <Link to="/" style={linkStyle}>Home</Link>

        {user?.role === "hirer" && <Link to="/freelancers" style={linkStyle}>Freelancers</Link>}
        {user?.role === "hirer" && <Link to="/post-job" style={linkStyle}>Post Job</Link>}

        {user?.role === "jobseeker" && <Link to="/jobs" style={linkStyle}>Jobs</Link>}

        {user && <Link to="/messages" style={linkStyle}>Messages</Link>}

        {!user && <Link to="/login" style={linkStyle}>Login</Link>}
        {!user && <Link to="/register" style={linkStyle}>Register</Link>}

        {user && <button onClick={handleLogout} style={{ ...linkStyle, background: "#ff416c", border: "none" }}>Logout</button>}
      </div>
    </div>
  );
}

export default Navbar;
