const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const registerSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },

  position: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },

  age: {
    type: Number,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },

  department: {
    type: String,
    required: true,
  },
  joiningDate: {
    type: Date,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  zilla: {
    type: String,
    required: true,
  },
  nid: {
    type: Number,
    required: true,
  },

  postCode: {
    type: Number,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Member", registerSchema);
