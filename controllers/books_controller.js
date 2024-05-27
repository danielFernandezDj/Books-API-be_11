// DEPENDENCIES
const express = require('express')
const books = express.Router()
const Books = require('../models/books')

Index:
books.get('/books', (req, res) => {
    books.find()
        .then(foundBooks => {
            res.json(foundBooks)
        })
        .catch(error => {
            console.error('Error fetching books:', error);
            res.status(500).json({ error: 'Failed to fetch books' });
        });
})


module.exports = books
