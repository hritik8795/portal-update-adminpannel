const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, default: "" },

    role: { type: String, required: true },
  },
  { timestamps: true }
);

const adminModal = new mongoose.model("admin", userSchema);
module.exports = adminModal;
