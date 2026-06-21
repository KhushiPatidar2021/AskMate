const mongoose = require('mongoose')

const assignmentSchema = new mongoose.Schema({
    title : String,
    question: String,
    answer: String
})


const assignmentModel = mongoose.model("assignment", assignmentSchema)

module.exports = assignmentModel