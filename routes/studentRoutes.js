// routes/studentRoutes.js
// All the /students routes live here (modular routing via express.Router()).
// app.js just does app.use("/students", studentRoutes) and stays clean.

const express = require("express");
const router = express.Router();
const students = require("../data/students");

// Small helper to keep "student not found" handling from repeating
// itself in every route below.
function findStudentIndex(id) {
  return students.findIndex((s) => s.id === id);
}

// GET /students -> view all students
router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    count: students.length,
    data: students
  });
});

// GET /students/:id -> view a single student by id
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return res.status(400).json({ success: false, message: "Id must be a number" });
  }

  const student = students.find((s) => s.id === id);

  if (!student) {
    return res.status(404).json({ success: false, message: `Student with id ${id} not found` });
  }

  res.status(200).json({ success: true, data: student });
});

// POST /students -> add a new student
router.post("/", (req, res) => {
  const { name, course } = req.body;

  // Basic Bad Request check - both fields are required
  if (!name || !course) {
    return res.status(400).json({
      success: false,
      message: "Both 'name' and 'course' are required"
    });
  }

  const newStudent = {
    id: students.length ? students[students.length - 1].id + 1 : 1,
    name,
    course
  };

  students.push(newStudent);

  res.status(201).json({ success: true, data: newStudent });
});

// PUT /students/:id -> update an existing student
router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const { name, course } = req.body;

  if (!name && !course) {
    return res.status(400).json({
      success: false,
      message: "Provide at least 'name' or 'course' to update"
    });
  }

  const index = findStudentIndex(id);

  if (index === -1) {
    return res.status(404).json({ success: false, message: `Student with id ${id} not found` });
  }

  if (name) students[index].name = name;
  if (course) students[index].course = course;

  res.status(200).json({ success: true, data: students[index] });
});

// DELETE /students/:id -> remove a student
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = findStudentIndex(id);

  if (index === -1) {
    return res.status(404).json({ success: false, message: `Student with id ${id} not found` });
  }

  const deletedStudent = students.splice(index, 1)[0];

  res.status(200).json({ success: true, message: "Student deleted", data: deletedStudent });
});

module.exports = router;
