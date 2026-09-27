// data/students.js
// In-memory "database" — just a plain JS array of student objects.
// No MongoDB/MySQL/Mongoose allowed for this assignment, so this array
// is our storage for as long as the server keeps running.

let students = [
  { id: 1, name: "Rahul", course: "BCA" },
  { id: 2, name: "Priya", course: "BTech" },
  { id: 3, name: "Amit", course: "BCA" }
];

module.exports = students;
