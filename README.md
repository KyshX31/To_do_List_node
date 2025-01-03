﻿# To_do_List_node
--
# To-Do List API

A simple and efficient RESTful API to manage your daily tasks. Built with **Node.js**, **Express**, and **MongoDB**, this project keeps your to-dos organized.

## Objective
To create a user-friendly and scalable API for managing tasks, enabling seamless integration with front-end applications and efficient task management.

## Features
- Add, view, update, and delete tasks.
- Filter and paginate to-dos.
- Seamlessly integrates with MongoDB.

## Quick Start

1. **Clone the repo:**
   ```bash
   git clone <repository_url>
   cd <repository_directory>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Setup environment:**
   Create a `.env` file and add:
   ```env
   PORT=3000
   MONGO_CONN_STR=<your_mongodb_connection_string>
   ```

4. **Run the server:**
   ```bash
   npm start
   ```
   Your API is live at `http://localhost:3000`.

## API Overview

### Endpoints

- **POST** `/todos` - Add a new task.
- **GET** `/todos` - Fetch all tasks.
- **GET** `/todos/:id` - Get a task by ID.
- **PUT** `/todos/:id` - Update a task.
- **DELETE** `/todos/:id` - Delete a task.
- **DELETE** `/todos` - Clear all tasks.

## Built With
- **Node.js** for backend logic.
- **Express** for routing.
- **MongoDB** for data storage.

---
Start organizing your tasks today with this API!
