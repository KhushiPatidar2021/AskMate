const path = require('path')
require('dotenv').config({path : path.resolve(__dirname, 'src', '.env')})
const app = require('./src/app')
const connectDB = require('./src/db/db')


// Start server first — don't wait for DB
app.listen(3000, () => {
    console.log("server running on port 3000")
})

// Connect DB separately — won't crash the server if it fails
connectDB()
    .then(() => console.log("MongoDB connected successfully"))
    .catch(err => console.error("MongoDB connection failed (server still running):", err.message))