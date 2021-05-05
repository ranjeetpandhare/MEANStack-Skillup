const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    number: { type: String, required: true, unique: true },
    dob: { type: String, required: true },
    userid: { type: String, required: true, unique: true },
    gender: { type: String, required: true },
    password: { type: String, required: true },
    profile: { type: String },
  },
  {
    strict: true,
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("User-Image", userSchema);
