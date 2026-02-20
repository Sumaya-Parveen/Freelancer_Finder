import React from "react";

const freelancers = [
  {
    id: 1,
    name: "John Doe",
    skill: "Full Stack Developer",
    price: "$25/hr",
    img: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Sarah Smith",
    skill: "UI/UX Designer",
    price: "$30/hr",
    img: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "David Lee",
    skill: "Java Developer",
    price: "$28/hr",
    img: "https://randomuser.me/api/portraits/men/11.jpg"
  },
  {
    id: 4,
    name: "Priya Sharma",
    skill: "Mobile App Developer",
    price: "$35/hr",
    img: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    id: 5,
    name: "Michael Chen",
    skill: "Data Scientist",
    price: "$40/hr",
    img: "https://randomuser.me/api/portraits/men/76.jpg"
  },
  {
    id: 6,
    name: "Aisha Khan",
    skill: "Digital Marketer",
    price: "$22/hr",
    img: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    id: 7,
    name: "Carlos Rivera",
    skill: "Graphic Designer",
    price: "$26/hr",
    img: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    id: 8,
    name: "Emily Davis",
    skill: "Content Writer",
    price: "$18/hr",
    img: "https://randomuser.me/api/portraits/women/12.jpg"
  }
];

function Home() {
  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>Find Top Freelancers 🚀</h1>

      <div style={styles.container}>
        {freelancers.map((f) => (
          <div key={f.id} style={styles.card}>
            
            <img src={f.img} alt={f.name} style={styles.image} />

            <h2>{f.name}</h2>

            <p style={styles.skill}>{f.skill}</p>

            <p style={styles.price}>{f.price}</p>

            <button style={styles.button}>
              Hire Now
            </button>

          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #1f1c2c, #928dab)",
    padding: "40px",
    fontFamily: "Arial"
  },

  heading: {
    textAlign: "center",
    color: "white",
    marginBottom: "40px"
  },

  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: "25px",
    justifyContent: "center"
  },

  card: {
    backdropFilter: "blur(15px)",
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "15px",
    padding: "20px",
    width: "230px",
    textAlign: "center",
    color: "white",
    boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
    border: "1px solid rgba(255,255,255,0.2)",
    transition: "0.3s"
  },

  image: {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    marginBottom: "10px",
    border: "3px solid white"
  },

  skill: {
    opacity: 0.9
  },

  price: {
    fontWeight: "bold",
    margin: "10px 0"
  },

  button: {
    background: "linear-gradient(45deg, #ff416c, #ff4b2b)",
    border: "none",
    padding: "10px 15px",
    color: "white",
    borderRadius: "20px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "0.3s"
  }
};

export default Home;
