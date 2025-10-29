import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollNumber: { type: Number, required: true, unique: true },
  course: { type: String, required: true },
  marks: { type: Number, required: true }
});

export default mongoose.model("Student", studentSchema);
