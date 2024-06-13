const mongoose = require("mongoose");
const checkString = function (name) {
  if (name.length == 0) return false;
  if (typeof name == "undefined" && typeof name == null) return false;
  return true;
};

const checkValidString = function (name) {
  const regex = /^[A-Za-z ]*$/;
  if (regex.test(name)) return true;
  return false;
};

const checkvalidMobileNum = function (number) {
  const regex = /^[0-9]+$/;
  if (regex.test(number)) return true;
  return false;
};

const checkSkillExits = function (skill) {
  const skills = ["java", "javascript", "php", "python", "none"];
  if (skills.includes(skill)) return true;
  return false;
};

const isValidId = function (id) {
  if (mongoose.Types.ObjectId.isValid(id)) return true;
  return false;
};

module.exports = {
  checkString,
  checkValidString,
  checkvalidMobileNum,
  checkSkillExits,
  isValidId
};
