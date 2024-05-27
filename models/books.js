// DEPENDENCIES
const mongoose = require('mongoose')
const { Schema } = mongoose 

//SCHEMA
const bookSchema = new Schema({
    "id": Number,
    "title": String,
    "description": String,
    "year": Number,
    "quantity": Number,
    "imageURL": String,
}
)

const Books = mongoose.model('Books', bookSchema);
module.exports = Books