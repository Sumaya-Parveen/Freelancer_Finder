import React, { useState } from "react";

function PostJob() {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [budget, setBudget] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const job = { title, company, budget, description };
    console.log("Job Posted:", job);
    alert("Job posted successfully ✅");
    // Clear form
    setTitle(""); setCompany(""); setBudget(""); setDescription("");
  };

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h1>Post a Job 📝</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px", maxWidth: "400px", margin: "20px auto" }}>
        <input type="text" placeholder="Job Title" value={title} onChange={e=>setTitle(e.target.value)} required />
        <input type="text" placeholder="Company" value={company} onChange={e=>setCompany(e.target.value)} required />
        <input type="text" placeholder="Budget" value={budget} onChange={e=>setBudget(e.target.value)} required />
        <textarea placeholder="Description" value={description} onChange={e=>setDescription(e.target.value)} required />
        <button type="submit" style={{ padding: "10px", background: "#ff416c", color: "white", border: "none", borderRadius: "10px" }}>Post Job</button>
      </form>
    </div>
  );
}

export default PostJob;
