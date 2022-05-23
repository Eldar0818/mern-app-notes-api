const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const mongoose = require('mongoose')
const Note = require('./Note')
const dotenv = require('dotenv')

dotenv.config()

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true })
        .then(()=> console.log('Database connected...'))
        .catch(err=> console.log(err))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.post('/api', async (req, res)=> {
    const newNote = new Note({
        title: req.body.title
    })

    try {
        const savedNote = await newNote.save()
        res.status(200).json(savedNote)
    } catch (error) {
        res.status(500).json(error)
    }
})

app.get('/api', async (req, res)=> {
    try {
        const allNotes = await Note.find()
        res.status(200).send(allNotes)
    } catch (error) {
        res.status(500).json(error) 
    }
})

app.delete('/api/:id', async (req, res)=> {
    try {
         await Note.findByIdAndDelete(req.params.id)
        res.status(200).json('Note deleted...')
    } catch (error) {
        res.status(500).json(error)
    }
})


const PORT = process.env.PORT || 5000
app.listen(PORT, ()=> console.log(`Server is running on ${PORT}...`))