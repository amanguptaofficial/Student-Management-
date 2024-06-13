const service = require("../service/studentService");

const userCreate = async function (req, res) {
  try {
    const createdStudent = await service.createStudent(req.body);
    res.send(createdStudent);
  } catch (error) {
    res.send(error);
  }
};

const getAllStudents = async function (req, res) {
  try {
    console.log("sfjsf");
    const allstudents = await service.getAllStuent();
    res.send(allstudents);
  } catch (error) {
    res.send(error);
  }
};

const getStudentById = async function (req, res) {
  try {
    const { id } = req.params;
    fetchedStudent = await service.getSingleStudent(id);
    res.send(fetchedStudent);
  } catch (error) {
    res, send(error);
  }
};

const deleteStudentById = async function (req, res) {
  try {
    const { id } = req.params;
    const deletedData = await service.deleteStudent(id);
    res.send(deletedData);
  } catch (error) {
    res.send(error);
  }
};

const updateStudent = async function (req, res) {
  try {
    const reqData = req.body;
    const {id} = req.params;
    console.log(reqData);
    console.log(id);
   const response = await service.updateStudent(id, reqData);

    res.send(response);
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  userCreate,
  getAllStudents,
  getStudentById,
  deleteStudentById,
  updateStudent,
};
