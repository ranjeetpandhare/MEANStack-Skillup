const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    role:{
      type:String,
      //  default:'customer',
      // enum:["customer","admin","superadmin"]
    },
    username: { type: String },
    firstname: { type: String },
    lastname: { type: String },
    email: { type: String },
    number: { type: String},
    dob: { type: String },
    userid: { type: String },
    gender: { type: String },
    password: { type: String },
    file: { type: String },
  },
  {
    // strict: true,
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
