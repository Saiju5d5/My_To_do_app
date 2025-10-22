import express from "express";
import cors from "cors";
import fs from "fs-extra";

const app = express();
const PORT = process.env.PORT || 5000;
const DATA_FILE = "./tasks.json";

app.use(cors());
app.use(express.json());

// 📦 Read all tasks
app.get("/tasks", async (req, res) => {
  const tasks = await fs.readJson(DATA_FILE);
  res.json(tasks);
});

// ➕ Add a new task
app.post("/tasks", async (req, res) => {
  const tasks = await fs.readJson(DATA_FILE);
  const newTask = {
    id: Date.now(),
    text: req.body.text,
    done: false
  };
  tasks.push(newTask);
  await fs.writeJson(DATA_FILE, tasks, { spaces: 2 });
  res.json(newTask);
});

// ✅ Toggle task done/undone
app.put("/tasks/:id", async (req, res) => {
  const tasks = await fs.readJson(DATA_FILE);
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (task) {
    task.done = !task.done;
    await fs.writeJson(DATA_FILE, tasks, { spaces: 2 });
    res.json(task);
  } else {
    res.status(404).json({ error: "Task not found" });
  }
});

// ❌ Delete a task
app.delete("/tasks/:id", async (req, res) => {
  let tasks = await fs.readJson(DATA_FILE);
  tasks = tasks.filter(t => t.id !== parseInt(req.params.id));
  await fs.writeJson(DATA_FILE, tasks, { spaces: 2 });
  res.json({ message: "Task deleted" });
});

app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
