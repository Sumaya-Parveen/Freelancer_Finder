import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div style={styles.page}>

      {/* HERO SECTION */}
      <div style={styles.hero}>

        <h1 style={styles.title}>
          Find The Perfect Freelancer For Your Project 🚀
        </h1>

        <p style={styles.subtitle}>
          Hire experts in web development, design, marketing & more.
        </p>

        {/* SEARCH BAR */}
        <div style={styles.searchBox}>
          <input
            type="text"
            placeholder="Search freelancers…"
            style={styles.input}
          />
          <button style={styles.searchBtn}>
            Search
          </button>
        </div>

        {/* CTA BUTTONS */}
        <div style={{ marginTop: "25px" }}>
          <Link to="/freelancers">
            <button style={styles.hireBtn}>
              Hire Talent
            </button>
          </Link>

          <Link to="/post-job">
            <button style={styles.workBtn}>
              Find Work
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}

const styles = {
  page: {
    height: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg,#0f2027,#203a43,#2c5364)",
    color: "white",
    textAlign: "center",
    padding: "20px"
  },

  hero: {
    backdropFilter: "blur(15px)",
    background: "rgba(255,255,255,0.1)",
    padding: "50px",
    borderRadius: "20px",
    boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
    border: "1px solid rgba(255,255,255,0.2)"
  },

  title: {
    fontSize: "2.5rem",
    marginBottom: "15px"
  },

  subtitle: {
    opacity: 0.9,
    marginBottom: "25px"
  },

  searchBox: {
    display: "flex",
    justifyContent: "center"
  },

  input: {
    padding: "12px",
    width: "250px",
    borderRadius: "20px 0 0 20px",
    border: "none",
    outline: "none"
  },

  searchBtn: {
    padding: "12px 20px",
    border: "none",
    background: "#ff4b2b",
    color: "white",
    borderRadius: "0 20px 20px 0",
    cursor: "pointer",
    fontWeight: "bold"
  },

  hireBtn: {
    padding: "12px 20px",
    margin: "10px",
    border: "none",
    borderRadius: "20px",
    background: "#00c6ff",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer"
  },

  workBtn: {
    padding: "12px 20px",
    margin: "10px",
    border: "none",
    borderRadius: "20px",
    background: "#ff416c",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer"
  }
};

export default Landing;
