// DEPENDENCIES
const mongoose = require('mongoose')
const { Schema } = mongoose

//SCHEMA
const booksSchema = new Schema({
    "id": 1,
    "title": "The Shinobi Initiative",
    "description": "The reality-bending adventures of a clandestine service agency in the year 2166",
    "year": 2014,
    "quantity": "10",
    "imageURL": "/assets/shinobi-initiative.jpeg"
}
)