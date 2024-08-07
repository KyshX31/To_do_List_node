import express from "express";
import Todo from "./Todo.js";

const router = express.Router();

// Create a new to-do
router.post("/", async (req, res) => {
  try {
    // Check if a to-do with the same title already exists
    const existingTodo = await Todo.findOne({ title: req.body.title });
    //

    //
    console.log("req.body.completed", req.body.completed);
    if (existingTodo) {
      return res.status(400).json({
        message:
          "TO DO WITH THIS TITLE AND STATUS ALREADY EXISTS. CONSIDER CHANGING SOMETHING AND COME BACK"
      });
    }

    // If not, create a new to-do
    const todo = new Todo({
      title: req.body.title
    });
    const savedTodo = await todo.save();
    res.status(201).json(savedTodo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all to-dos
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single to-do by ID
router.get("/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ message: "To-do not found" });
    res.json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a to-do by ID
router.put("/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ message: "To-do not found" });

    todo.title = req.body.title || todo.title;
    todo.completed =
      req.body.completed !== undefined ? req.body.completed : todo.completed;

    const updatedTodo = await todo.save();
    res.json(updatedTodo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a to-do by ID
router.delete("/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ message: "To-do not found" });

    await todo.remove();
    res.json({ message: "To-do deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/todos", async (req, res) => {
  try {
    console.log("Complete deletion process is being run");
    await Todo.deleteMany({});
  } catch (err) {
    console.error("Error has occured");
  }
});
export default router;
