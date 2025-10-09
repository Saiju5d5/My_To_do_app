📋 To-Do List App – Project Description

This To-Do List app is a full-stack task management application that allows users to create, view, complete, and delete daily tasks. It provides a clean and responsive user interface on the frontend and uses a simple JSON file-based data store on the backend for persistent storage.

The app is designed with simplicity in mind while demonstrating core concepts of full-stack web development using modern JavaScript tools and techniques.

🚀 Features

✅ Add Tasks – Users can input new tasks and add them to their list.

✅ Mark as Done/Undone – Click on a task to toggle its completion status.

✅ Delete Tasks – Remove tasks individually with a click.

✅ Persistent Storage – Tasks are saved to a tasks.json file on the server.

✅ RESTful API – Backend provides endpoints to handle CRUD operations.

✅ Responsive Design – Works well on desktop and mobile screens.

🛠️ Technologies Used
Frontend:

HTML5

CSS3

Vanilla JavaScript (ES6+)

Fetch API for async communication with backend

Backend:

Node.js

Express.js

fs-extra for reading/writing JSON data

CORS for cross-origin requests (during development)

📂 Project Structure
todo-app/
├── client/
│   ├── index.html        // UI layout
│   ├── script.js         // Frontend logic
│   └── styles.css        // (optional) styling
├── server/
│   ├── server.js         // Express backend
│   └── tasks.json        // Persistent data store
├── package.json
