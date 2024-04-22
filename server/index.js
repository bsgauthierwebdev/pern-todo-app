const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./db')

// Middleware
app.use(cors())
app.use(express.json())

// ROUTES //

// Create a ToDo

// Get All ToDos

// Update a ToDo

// Delete a ToDo

app.listen(5000, () => {
    console.log('Server is now listening on port 5000')
})