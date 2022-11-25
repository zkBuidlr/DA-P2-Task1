const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  discord: String,
  twitter: String,
  email: String,
});

module.exports = mongoose.models.User || mongoose.model("User", UserSchema);
