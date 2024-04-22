const express = require('express')
const app = express()
const cors = require('cors')

// Middleware
app.use(cors())
app.use(express.json())

app.listen(5000, () => {
    console.log('Server is now listening on port 5000')
})