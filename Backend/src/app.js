const express = require('express');
const {GoogleGenerativeAI} = require('@google/generative-ai');
const { createIdResolver } = require('vite');
const assignmentModel = require('./models/assignment.model')
const cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json());
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

app.post('/ask', async (req , res)=>{
  try{ const {question} = req.body;

    const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash"
    })

    const result = await model.generateContent(`
Answer this question in plain text.
Do not use markdown.
Do not use *, #, **, bullet points.
Question: ${question}
`)
    const titlename = await model.generateContent(`Generate a title of max-4 word length of this question ${question} return only title do not give any option just give title according to you suitable for question`)
    const answer = result.response.text()
    const title = titlename.response.text()

    await assignmentModel.create({
        question : question,
        answer : answer,
        title : title
    })

    res.status(200).json({
        message:"data created",
         title,
         answer
       
    })
}
catch(error){
    console.log(error)

    res.status(500).json({
      message: error.message
    })
}
})

app.get('/history', async(req, res)=>{
    const history = await assignmentModel.find().select('title')
    res.json({
        history

    })
})

app.get('/history/:id', async(req, res)=>{
    const chat = await assignmentModel.findById(req.params.id)
    res.json(chat)
})
module.exports = app