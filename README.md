# Employee Task Management API

A RESTful API built with **Node.js, Express, and MongoDB** to manage employees, their tasks, and real-time communication. The API supports full CRUD operations for employees and tasks, role-based access, and a chat system between Admin and Employees.

## Live Deployment and API Testing Links

* Backend & API: [https://employee-task-management-kohl.vercel.app](https://employee-task-management-kohl.vercel.app)
* API Testing Guide (Postman collection / Documentation): [Drive Link](https://drive.google.com/file/d/1xUAIZNuBKgzYp6OeYdyE7fmfsJvrl9-T/view?usp=sharing)

---

## Project Overview

This backend API helps manage employees and tasks efficiently:

* **Admin** can create employees, assign tasks, update task statuses, delete employees, and chat with employees in real-time.
* **Employees** can login, view their assigned tasks, mark tasks as completed, and chat with the admin.

Key updates in the current implementation:

* Admin credentials are now seeded automatically using **seed.js**.
* Real-time chat functionality between Admin and Employees using **Socket.io**.
* Fully tested with Postman for CRUD operations and chat events.

---

## Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB (with Mongoose ORM)
* **Authentication:** JWT (JSON Web Tokens)
* **Password Hashing:** bcrypt.js
* **Real-time Communication:** Socket.io
* **Dev Tools:** nodemon, dotenv

---

## Prerequisites

* Node.js (v18 or higher recommended)
* npm (comes with Node.js)
* MongoDB (local or Atlas cloud instance)

---

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone <your-repo-link>
   cd server
   ```

2. Install dependencies:

   ```bash
   npm install
   npm install --save-dev nodemon
   ```

3. Create a `.env` file in the root folder with the following variables:

   ```text
   PORT=4000
   MONGO_URL=<your-mongodb-connection-string>
   JWT_SECRET=<your-jwt-secret>
   ```

4. Seed admin credentials:

   ```bash
   node seed.js
   ```

   > **Note:** This automatically creates the admin account in the database.

5. Run the server:

   ```bash
   node server.js
   # or
   nodemon server.js
   ```

6. The server will run at `http://localhost:4000`.

---

## Features

### Admin Capabilities

* Login using seeded admin credentials
* Create new employees
* View employee details by ID or all employees
* Assign tasks to employees
* Update task statuses (admin override)
* Delete employees and their linked accounts
* Real-time chat with employees

### Employee Capabilities

* Login
* View tasks assigned to them
* Update task status (mark as "completed")
* Real-time chat with admin

### Security

* Passwords are hashed with **bcrypt.js**
* JWT authentication for both Admin and Employees
* Role-based access control for endpoints

---

## Real-Time Chat

* Implemented using **Socket.io**
* Admin can chat with multiple employees simultaneously
* Employees can chat with Admin
* Supports `message`, `seen`, and online/offline tracking

---

## API Endpoints

### Admin Routes

| Method | Endpoint               | Description             | Protected       |
| ------ | ---------------------- | ----------------------- | --------------- |
| POST   | `/login`               | Admin login             | No              |
| POST   | `/employee/create`     | Create a new employee   | Yes, admin only |
| GET    | `/employee`            | Get all employees       | Yes, admin only |
| GET    | `/employee/:id`        | Get employee by ID      | Yes, admin only |
| DELETE | `/employee/:id`        | Delete employee         | Yes, admin only |
| POST   | `/task/assign`         | Assign task to employee | Yes, admin only |
| GET    | `/view-task`           | View all tasks          | Yes, admin only |
| PATCH  | `/task/:taskId/status` | Update task status      | Yes, admin only |


### Employee Routes

| Method | Endpoint         | Description                                      | Protected          |
| ------ | ---------------- | ------------------------------------------------ | ------------------ |
| POST   | `/login`         | Employee login                                   | No                 |
| GET    | `/tasks`         | Get all tasks assigned to the logged-in employee | Yes, employee only |
| PATCH  | `/tasks/:taskId` | Update task status (`in-progress` / `completed`) | Yes, employee only |


### Chat Routes

| Method | Endpoint             | Description                                                            | Protected |
| ------ | -------------------- | ---------------------------------------------------------------------- | --------- |
| GET    | `/users`             | Retrieve users for sidebar (Admins see Employees, Employees see Admin) | Yes       |
| GET    | `/messages/:id`      | Get all messages between the logged-in user and the selected user      | Yes       |
| PATCH  | `/messages/seen/:id` | Mark all messages from a specific user as seen                         | Yes       |
| POST   | `/send/:id`          | Send a new message to the selected user                                | Yes       |


---

## Authentication

* **Admin:** Seeded credentials via `seed.js`
* **Employee:** JWT token generated on login
* Add `Authorization: Bearer <token>` in request headers for protected routes

---

## Notes

* All endpoints and chat functionality tested successfully with **Postman**
* Passwords are securely hashed before storage
* MongoDB stores all users, employees, tasks, and chat messages
* Can be extended to include a frontend UI for full-stack deployment

---

## Deployment

* Server is deployed using **Vercel serverless functions**

---
