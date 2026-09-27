// app.js
// Entry point — sets up the Express server, wires up middleware and routes.

const express = require("express");
const logger = require("./middleware/logger");
const studentRoutes = require("./routes/studentRoutes");

const app = express();
const PORT = 3000;

// Middleware to parse incoming JSON request bodies (req.body)
app.use(express.json());

// Custom logger middleware — runs on every request
app.use(logger);

// Home route — just a sanity check that the server is alive
app.get("/", (req, res) => {
  res.status(200).json({ message: "Student Management REST API is running" });
});

// All student-related routes are mounted under /students
app.use("/students", studentRoutes);

// 404 handler — runs if nothing above matched the request
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// Generic error handler — catches anything thrown/passed to next(err)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "Internal Server Error" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
