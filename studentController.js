import Student from "../models/studentModel.js";

export const getAllStudents = async (req, res) => {
  const students = await Student.find();
  res.render("index", { students });
};

export const addStudentForm = (req, res) => {
  res.render("addStudent");
};

export const addStudent = async (req, res) => {
  const { name, rollNumber, course, marks } = req.body;
  await Student.create({ name, rollNumber, course, marks });
  res.redirect("/students");
};

export const deleteStudent = async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.redirect("/students");
};
