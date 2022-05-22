const mongoose = require('mongoose')

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        max: 400
    }
}, { timestamps: true })

module.exports = mongoose.model('Note', NoteSchema)