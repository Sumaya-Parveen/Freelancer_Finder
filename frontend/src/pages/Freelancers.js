import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const skills = [
  "Full Stack Developer",
  "Java Developer",
  "React Developer",
  "UI/UX Designer",
  "Mobile App Developer",
  "Data Scientist",
  "Digital Marketer",
  "Content Writer",
  "Graphic Designer",
  "DevOps Engineer"
];

const freelancersNames = [
  { name: "John Doe", gender: "male" },
  { name: "Sarah Smith", gender: "female" },
  { name: "David Lee", gender: "male" },
  { name: "Priya Sharma", gender: "female" },
  { name: "Michael Chen", gender: "male" },
  { name: "Aisha Khan", gender: "female" },
  { name: "Robert Johnson", gender: "male" },
  { name: "Emma Brown", gender: "female" },
  { name: "Olivia Davis", gender: "female" },
  { name: "William Wilson", gender: "male" },
  { name: "Sophia Miller", gender: "female" },
  { name: "James Taylor", gender: "male" },
  { name: "Mia Anderson", gender: "female" },
  { name: "Ethan Thomas", gender: "male" },
  { name: "Isabella Martinez", gender: "female" },
  { name: "Alexander Jackson", gender: "male" },
  { name: "Charlotte White", gender: "female" },
  { name: "Daniel Harris", gender: "male" },
  { name: "Amelia Clark", gender: "female" },
  { name: "Benjamin Lewis", gender: "male" },
  { name: "Harper Young", gender: "female" },
  { name: "Samuel King", gender: "male" },
  { name: "Ella Wright", gender: "female" },
  { name: "Jacob Scott", gender: "male" },
  { name: "Liam Green", gender: "male" },
  { name: "Emily Adams", gender: "female" },
  { name: "Noah Baker", gender: "male" },
  { name: "Abigail Nelson", gender: "female" },
  { name: "Lucas Carter", gender: "male" },
  { name: "Madison Mitchell", gender: "female" },
  { name: "Henry Perez", gender: "male" },
  { name: "Elizabeth Roberts", gender: "female" },
  { name: "Sebastian Turner", gender: "male" },
  { name: "Grace Phillips", gender: "female" },
  { name: "Owen Campbell", gender: "male" },
  { name: "Chloe Parker", gender: "female" },
  { name: "Mason Evans", gender: "male" },
  { name: "Victoria Edwards", gender: "female" },
  { name: "Jack Collins", gender: "male" },
  { name: "Scarlett Stewart", gender: "female" },
  { name: "Aiden Sanchez", gender: "male" },
  { name: "Lily Morris", gender: "female" },
  { name: "Logan Rogers", gender: "male" },
  { name: "Zoey Reed", gender: "female" },
  { name: "Nathan Cook", gender: "male" },
  { name: "Hannah Morgan", gender: "female" },
  { name: "Caleb Bell", gender: "male" },
  { name: "Aria Murphy", gender: "female" },
  { name: "Wyatt Bailey", gender: "male" },
  { name: "Nora Rivera", gender: "female" },
  { name: "Leo Cooper", gender: "male" },
  { name: "Stella Richardson", gender: "female" },
  { name: "Isaac Cox", gender: "male" },
  { name: "Aurora Howard", gender: "female" },
  { name: "Christian Ward", gender: "male" },
  { name: "Violet Torres", gender: "female" },
  { name: "Hunter Peterson", gender: "male" },
  { name: "Savannah Gray", gender: "female" },
  { name: "Jonathan James", gender: "male" },
  { name: "Penelope Hughes", gender: "female" }
];

const freelancersData = freelancersNames.map((f, i) => ({
  id: i + 1,
  name: f.name,
  skill: skills[i % skills.length],
  rating: (4 + Math.random()).toFixed(1),
  price: `$${20 + i}/hr`,
  img: `https://i.pravatar.cc/150?img=${f.gender === "male" ? (i % 40 + 1) : (i % 30 + 50)}`
}));

function Freelancers() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [skillFilter, setSkillFilter] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [hiredIds, setHiredIds] = useState([]);

  let filteredFreelancers = freelancersData.filter(f =>
    f.name.toLowerCase().includes(search.toLowerCase()) &&
    (skillFilter === "" || f.skill === skillFilter)
  );

  if (sortOption === "rating") filteredFreelancers.sort((a,b)=>b.rating-a.rating);
  else if (sortOption==="priceLow") filteredFreelancers.sort((a,b)=>parseInt(a.price.replace("$","").replace("/hr",""))-parseInt(b.price.replace("$","").replace("/hr","")));
  else if (sortOption==="priceHigh") filteredFreelancers.sort((a,b)=>parseInt(b.price.replace("$","").replace("/hr",""))-parseInt(a.price.replace("$","").replace("/hr","")));

  const hireFreelancer = (freelancer) => {
    if (!hiredIds.includes(freelancer.id)) {
      setHiredIds([...hiredIds, freelancer.id]); // update state
      // Do not navigate immediately, so button change is visible
      localStorage.setItem("hiredFreelancer", JSON.stringify(freelancer));
      alert(`You hired ${freelancer.name} ✅`);
    }
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>Browse Freelancers 👩‍💻</h1>
      <div style={styles.filterBox}>
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.input}
        />
        <select value={skillFilter} onChange={(e)=>setSkillFilter(e.target.value)} style={styles.select}>
          <option value="">All Skills</option>
          {skills.map((s,i)=><option key={i} value={s}>{s}</option>)}
        </select>
        <select value={sortOption} onChange={(e)=>setSortOption(e.target.value)} style={styles.select}>
          <option value="">Sort By</option>
          <option value="rating">Rating: High to Low</option>
          <option value="priceLow">Price: Low to High</option>
          <option value="priceHigh">Price: High to Low</option>
        </select>
      </div>

      <div style={styles.container}>
        {filteredFreelancers.map(f=>{
          const isHired = hiredIds.includes(f.id);
          return (
            <div key={f.id} style={styles.card}>
              <img src={f.img} alt={f.name} style={styles.image}/>
              <h3>{f.name}</h3>
              <p>{f.skill}</p>
              <p>⭐ {f.rating}</p>
              <p style={styles.price}>{f.price}</p>
              <button
                style={{
                  ...styles.button,
                  background: isHired ? "gray" : "linear-gradient(45deg,#ff416c,#ff4b2b)",
                  cursor: isHired ? "not-allowed" : "pointer"
                }}
                disabled={isHired}
                onClick={()=>hireFreelancer(f)}
              >
                {isHired ? "Hired" : "Hire Now"}
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const styles = {
  page: { minHeight:"100vh", padding:"40px", background:"linear-gradient(135deg,#1d2671,#c33764)", color:"white", textAlign:"center" },
  heading:{marginBottom:"20px"},
  filterBox:{marginBottom:"25px", display:"flex", justifyContent:"center", gap:"10px", flexWrap:"wrap"},
  input:{padding:"10px", borderRadius:"10px", border:"none", outline:"none", width:"200px"},
  select:{padding:"10px", borderRadius:"10px", border:"none", outline:"none", marginLeft:"10px"},
  container:{display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))", gap:"25px"},
  card:{backdropFilter:"blur(15px)", background:"rgba(255,255,255,0.1)", borderRadius:"15px", padding:"20px", boxShadow:"0 8px 32px rgba(0,0,0,0.3)", border:"1px solid rgba(255,255,255,0.2)", transition:"0.3s"},
  image:{width:"90px", height:"90px", borderRadius:"50%", border:"3px solid white", marginBottom:"10px"},
  price:{fontWeight:"bold", margin:"10px 0"},
  button:{padding:"10px 15px", border:"none", borderRadius:"20px", color:"white", fontWeight:"bold"}
}

export default Freelancers;
