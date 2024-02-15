import express from "express";
import { v4 as uuidv4 } from "uuid";

const app = express();

app.use(express.json());

const port = 4000;
let ToDos = [
  {
    id: uuidv4(),
    title: "Make to do list app",
    surename: "test",
  },
];
// Get methods always for read from (CRUD)
app.get("/heathcheck", (req, res) => {
  res.send("ok");
});
app.get("/api/todos/find", (req, res) => {
  res.json(ToDos);
});
app.get("/", (req, res) => {
  res.send("");
});
app.get("/", (req, res) => {
  res.send("");
});
app.get("/", (req, res) => {
  res.send("");
});
// Create from (CRUD)

app.post("/api/todos/create", (req, res) => {
  const { title, surename } = req.body;
  const newToDo = {
    id: uuidv4(),
    title,
    surename,
  };
  ToDos.push(newToDo);
  res.json(ToDos);
  // res.json(true);
});

//Delete from CRUD

app.delete("/api/todos/delete/:todoId", (req, res) => {
  const { todoId } = req.params;

  ToDos = ToDos.filter((todo) => todo.id !== todoId);

  res.json(ToDos);
});

app.put("/api/todos/put/:todoId", (req, res) => {
  const { todoId } = req.params;
  const { title } = req.body;

  ToDos = ToDos.map((todo) => {
    if (todo.id === todoId) {
      return {
        ...todo,
        title,
      };
    }
    return todo;
  });
  res.json(ToDos);
});

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});

console.log("hello to do list app");
