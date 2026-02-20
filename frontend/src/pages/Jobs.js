import React, { useState, useEffect } from "react";

// Dummy data for jobs
const jobsData = [
  { id: 1, title: "React Developer Needed", company: "Tech Corp", budget: "$500", description: "Build frontend components using React." },
  { id: 2, title: "Graphic Designer", company: "Creative Inc", budget: "$300", description: "Design marketing materials and logos." },
  // Add 10-20 more jobs
];

function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Load jobs from dummy data or fetch from backend
    setJobs(jobsData);
  }, []);

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h1>Available Jobs 💼</h1>
      <div style={{ display: "grid", gap: "20px", marginTop: "20px" }}>
        {jobs.map(job => (
          <div key={job.id} style={{ background: "rgba(255,255,255,0.1)", padding: "20px", borderRadius: "15px" }}>
            <h3>{job.title}</h3>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Budget:</strong> {job.budget}</p>
            <p>{job.description}</p>
            <button style={{ padding: "10px 15px", borderRadius: "10px", background: "#ff416c", color: "white", border: "none" }}>
              Apply
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Jobs;
