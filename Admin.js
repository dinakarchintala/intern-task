// Admin.js
const mongoose = require("mongoose");

const adminLogin = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  register: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Register",
    },
  ],
});
const Admin = mongoose.model("Admin", adminLogin);
module.exports = Admin;