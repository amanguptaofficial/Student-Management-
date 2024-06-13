const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  qualification: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  skill: {
    type: String,
    default: "none",
    enum: [
      "java",
      "javascript",
      "php",
      "python",
      "none"
    ],
  },
});

const student = mongoose.model("students", studentSchema);

module.exports = student;
