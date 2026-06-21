const path = require('path')
require('dotenv').config({path : path.resolve(__dirname, 'src', '.env')})
const app = require('./src/app')
const connectDB = require('./src/db/db')


connectDB()
app.listen(3000, ()=>{
    console.log("server running on port 3000")
})