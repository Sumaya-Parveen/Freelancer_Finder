import React from "react";

function FreelancerProfile() {

  const freelancer = JSON.parse(
    localStorage.getItem("hiredFreelancer")
  );

  if (!freelancer) {
    return <h2>No Freelancer Selected</h2>;
  }

  return (
    <div style={styles.page}>

      <div style={styles.card}>

        <img
          src={freelancer.img}
          alt={freelancer.name}
          style={styles.image}
        />

        <h2>{freelancer.name}</h2>

        <p>{freelancer.skill}</p>

        <p>⭐ {freelancer.rating}</p>

        <p>{freelancer.price}</p>

        <button style={styles.button}>
          Start Chat
        </button>

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
    background:
      "linear-gradient(135deg,#000428,#004e92)",
    color: "white"
  },

  card: {
    backdropFilter: "blur(15px)",
    background: "rgba(255,255,255,0.1)",
    padding: "40px",
    borderRadius: "20px",
    textAlign: "center"
  },

  image: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    border: "3px solid white"
  },

  button: {
    marginTop: "20px",
    padding: "10px 20px",
    border: "none",
    borderRadius: "20px",
    background: "#ff416c",
    color: "white",
    cursor: "pointer"
  }
};

export default FreelancerProfile;
