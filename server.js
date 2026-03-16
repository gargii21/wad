const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

let tasks = [];


app.get("/tasks", (req, res) => {
    res.json(tasks);
});


app.post("/tasks", (req, res) => {
    const task = req.body;
    tasks.push(task);
    res.json({message:"Task added", task});
});


app.put("/tasks/:id", (req, res) => {
    const id = req.params.id;
    const updatedTask = req.body;

    const index = tasks.findIndex(t => t.id === id);

    if(index !== -1){
        tasks[index] = updatedTask;
        res.json({message:"Task updated"});
    } else {
        res.status(404).json({message:"Task not found"});
    }
});
app.put((res,req))
app.delete("/tasks/:id", (req, res) => {
    const id = req.params.id;

    tasks = tasks.filter(t => t.id !== id);

    res.json({message:"Task deleted"});
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});