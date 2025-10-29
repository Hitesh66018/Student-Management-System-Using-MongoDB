import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import studentRoutes from "./src/routes/studentRoutes.js";
import path from "path";

dotenv.config();
const app = express();
connectDB();

app.set("view engine", "ejs");
app.set("views", path.resolve("src/views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/students", studentRoutes);

app.get("/", (req, res) => {
  res.redirect("/students");
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
