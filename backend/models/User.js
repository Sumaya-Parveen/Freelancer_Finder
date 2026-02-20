
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: String,
  skills: [String],
  hourlyRate: Number,
  portfolio: String
});

module.exports = mongoose.model("User", userSchema);
