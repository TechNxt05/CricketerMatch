const mongoose = require("mongoose");

const UserResponseSchema = new mongoose.Schema({
  name: String,
  email: String,
  answers: Array,
  result: Object,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("UserResponse", UserResponseSchema);
