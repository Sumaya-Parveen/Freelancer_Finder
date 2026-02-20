
const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: String,
  description: String,
  budget: Number,
  clientId: String,
  status: { type: String, default: "open" }
});

module.exports = mongoose.model("Job", jobSchema);
