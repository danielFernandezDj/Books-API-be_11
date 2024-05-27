// DEPENDENCIES
const mongoose = require('mongoose')
const { Schema } = mongoose

//SCHEMA
const bookSchema = new Schema({
    "id": { type: Number, require: true, unique: true },
    "title": { type: String, require: true },
    "description": String,
    "year": Number,
    "quantity": Number,
    "imageURL": String,
}
)

const Books = mongoose.model('Books', bookSchema);
module.exports = Books