
const router = require("express").Router();
const Job = require("../models/Job");

router.post("/create", async (req,res)=>{
  const job = await Job.create(req.body);
  res.json(job);
});

router.get("/all", async (req,res)=>{
  const jobs = await Job.find();
  res.json(jobs);
});

module.exports = router;
