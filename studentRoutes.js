import express from "express";
import {
  getAllStudents,
  addStudentForm,
  addStudent,
  deleteStudent
} from "../controllers/studentController.js";

const router = express.Router();

router.get("/", getAllStudents);
router.get("/add", addStudentForm);
router.post("/add", addStudent);
router.get("/delete/:id", deleteStudent);

export default router;
