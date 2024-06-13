const express = require("express");
const controller = require("../controller/StudentController");

const router = express.Router();

router.post("/student", controller.userCreate);
router.get("/allstudent", controller.getAllStudents);
router.get("/student/:id", controller.getStudentById);
router.delete("/student/:id", controller.deleteStudentById);
router.put("/student/:id",controller.updateStudent)

module.exports = router;
