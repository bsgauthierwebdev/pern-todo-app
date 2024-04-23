const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./db')

// Middleware
app.use(cors())
app.use(express.json())

// ROUTES //

// Create a ToDo

app.post('/todos', async (req, res) => {
    try {
        const {description} = req.body
        const newTodo = await pool.query(
            "INSERT INTO todo (description) VALUES($1) RETURNING *", 
            [description]
        )

        res.json(newTodo.rows [0])
    } catch (err) {
        console.log(err.message)
    }
})

// Get All ToDos

app.get('/todos', async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo")
        res.json(allTodos.rows)
    } catch (err) {
        console.log(err.message)
    }
})

// Get Single ToDo

app.get('/todos/:id', async (req, res) => {
    try {
        const {id} = req.params
        const todo = await pool.query(
            "SELECT * FROM todo WHERE todo_id = $1", 
            [id]
        )

        res.json(todo.rows[0])
    } catch (err) {
        console.log(err.message)
    }
})

// Update a ToDo

app.put('/todos/:id', async (req, res) => {
    try {
        const {id} = req.params
        const {description} = req.body
        const updateTodo = await pool.query(
            "UPDATE todo SET description = $1 WHERE todo_id = $2",
            [description, id]
        )

        res.json('ToDo was updated successfully')
    } catch (err) {
        console.log(err.message)
    }
})

// Delete a ToDo

app.delete('/todos/:id', async (req, res) => {
    try {
        const {id} = req.params
        const deleteTodo = await pool.query(
            "DELETE FROM todo WHERE todo_id = $1",
            [id]
        )

        res.json('ToDo was deleted successfully')
    } catch (err) {
        console.log(err.message)
    }
})

app.listen(5000, () => {
    console.log('Server is now listening on port 5000')
})