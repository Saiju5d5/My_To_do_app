// API URL of backend
const API_URL = "https://my-to-do-app-6fkc.onrender.com/tasks";

// DOM elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Load tasks from backend and render
async function loadTasks() {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Failed to fetch tasks");
    const tasks = await res.json();
    renderTasks(tasks);
  } catch (err) {
    console.error(err);
    taskList.innerHTML = "<li style='color:red'>Failed to load tasks</li>";
  }
}

// Render tasks in the UI
function renderTasks(tasks) {
  taskList.innerHTML = "";
  tasks.forEach(task => {
    const li = document.createElement("li");
    li.className = task.done ? "done" : "";
    li.innerHTML = `
      <span onclick="toggleTask(${task.id})">${task.text}</span>
      <button onclick="deleteTask(${task.id})">❌</button>
    `;
    taskList.appendChild(li);
  });
}

// Add new task
addBtn.addEventListener("click", async () => {
  const text = taskInput.value.trim();
  if (!text) return alert("Please enter a task");
  try {
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text })
    });
    taskInput.value = "";
    loadTasks(); // refresh list
  } catch (err) {
    console.error("Error adding task:", err);
  }
});

// Toggle done/undone
async function toggleTask(id) {
  try {
    await fetch(`${API_URL}/${id}`, { method: "PUT" });
    loadTasks(); // refresh list
  } catch (err) {
    console.error("Error toggling task:", err);
  }
}

// Delete task
async function deleteTask(id) {
  try {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    loadTasks(); // refresh list
  } catch (err) {
    console.error("Error deleting task:", err);
  }
}

// Initial load
loadTasks();
