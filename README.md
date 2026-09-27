# Student Management REST API

Lab Assignment 2 — Web Dev III (Node.js & Express Backend), Unit 2.

Simple CRUD REST API for managing student records, using Express.js and
an in-memory JavaScript array (no database, no Mongoose).

## IMPORTANT — before you run anything

1. Unzip this file. You'll get ONE folder called `student-management-api`.
2. Open a terminal INSIDE that folder — the one that directly contains
   `app.js`, `package.json`, `routes`, `middleware`, `data`.
   Do NOT open the terminal inside `data`, `routes`, or `middleware`.
3. `node_modules` (with express already installed) is included in this zip,
   so you do NOT need to run `npm install`. Just run:
   ```
   npm start
   ```
4. If you ever delete `node_modules` and want to reinstall, run `npm install`
   (not `npm init`) from this same folder.

## Project Structure

```
student-management-api/          <- open your terminal HERE
├── app.js                 # server entry point
├── package.json
├── node_modules/           # already installed, don't touch
├── routes/
│   └── studentRoutes.js   # all /students CRUD routes
├── middleware/
│   └── logger.js          # custom request logger
└── data/
    └── students.js        # in-memory array of students
```

## API Endpoints

| Method | Route           | Description              |
|--------|-----------------|--------------------------|
| GET    | /students       | Get all students         |
| GET    | /students/:id   | Get one student by id    |
| POST   | /students       | Add a new student        |
| PUT    | /students/:id   | Update a student         |
| DELETE | /students/:id   | Delete a student         |

Server runs at `http://localhost:3000`.

## Testing with Postman

1. **GET all students**
   `GET http://localhost:3000/students`

2. **GET one student**
   `GET http://localhost:3000/students/1`

3. **POST a new student**
   `POST http://localhost:3000/students`
   Body → raw → JSON:
   ```json
   { "name": "Sneha", "course": "MCA" }
   ```

4. **PUT (update) a student**
   `PUT http://localhost:3000/students/1`
   Body → raw → JSON:
   ```json
   { "course": "MTech" }
   ```

5. **DELETE a student**
   `DELETE http://localhost:3000/students/1`

## Status Codes Used

- `200` – Success (GET, PUT, DELETE)
- `201` – Created (POST)
- `400` – Bad Request (missing/invalid fields)
- `404` – Not Found (student id doesn't exist / bad route)
- `500` – Internal Server Error (unexpected errors)

## Notes

- Every request is logged by the custom middleware (`middleware/logger.js`) with method, URL and timestamp — check your terminal while testing.
- Data resets every time you restart the server, since it's stored only in memory (`data/students.js`).
- Before submitting to GitHub, delete the `node_modules` folder (it's huge and unnecessary — a `.gitignore` is included that already excludes it if you use `git add .`).
