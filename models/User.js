const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  email: { type: String, require: true, unique: true },
  name: { type: String, require: true },
  password: { type: String, require: true },
});
const User = mongoose.model("users", schema);
module.exports = User;
