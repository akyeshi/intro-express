// load express
const express = require("express");
const path = require("path");

// require the ToDO database
const todoDB = require("./data/todo-db");
const studentDB = require("./data/students");

// create express app
const app = express();

// specify default template engine on the app (app.set)
// express set view engine property on the app object
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// mount middleware (app.use)
app.use(express.static(path.join(__dirname, "public")));

// mount routes

// create root route on express app
app.get("/", (req, res) => {
  // res.send("<h1>Hello Express</h1>");
  // res.redirect("/todos");
  res.render("home");
});

app.get("/home", (req, res) => {
  res.render("home");
});

// app.render();
// app.redirect('');
// app.json();

app.get("/todos", (req, res) => {
  const todos = todoDB.getAll();
  // res.json(todos);
  res.render("todos/index", { todos }); // {todos: todos};
});

app.get("/students", (req, res) => {
  const students = studentDB.getStudents();
  res.render("students/index", { students });
});

app.get("/students/:id", (req, res) => {
  console.log(`The value for the :id route parameter is: ${req.params.id}`);
  res.render('students/show', {student: studentDB.getOne(req.params.id)});
  // res.json({student: studentDB.getOne(req.params.id)});
  // res.send(studentDB.getOne(parseInt(req.params.id)));
  // res.send(typeof req.params.id);
  // res.send(studentDB.getOne(1));
});

// tell app to listen on port 3000 for http requests from clients
app.listen(3000, () => {
  // second argument is optional
  console.log("Listening on port 3000");
});
