// DEPENDENCIES
const express = require('express');
const books = express.Router();
const Books = require('../models/books');

// Index route - Fetch all books
books.get('/', (req, res) => {
    Books.find()
        .then(foundBooks => {
            res.json(foundBooks);
        })
        .catch(error => {
            console.error('Error fetching books:', error);
            res.status(500).json({ error: 'Failed to fetch books' });
        });
});

books.get('/:id', (req, res) => {
    books.findOne({ id: req.params.id.toLocaleLowerCase() })
        .then(foundBooks => {
            res.json(foundBooks);
        })
        .catch(error => {
            console.error('Error fetching books:', error);
            res.status(500).json({ error: 'Failed to fetch books' });
        });
})

module.exports = books;
