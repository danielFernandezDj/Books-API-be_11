// DEPENDENCIES
const express = require('express');
const books = express.Router();
const Books = require('../models/books');

// GET all books
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

// GET a single book by ID
books.get('/:id', (req, res) => {
    books.findOne({ id: req.params.id })
        .then(foundBooks => {
            if (foundBooks) {
                res.json(foundBooks);
            } else {
                res.status(404).json({ error: 'Book not found' });
            }
        })
        .catch(error => {
            console.error('Error fetching books:', error);
            res.status(500).json({ error: 'Failed to fetch books' });
        });
})

// POST a new book
books.post('/', (req, res) => {
    books.find()
    const newBook = new Books(req.body)
    newBook.save()
        .then(saveBook => {
            res.status(201).json(savedBook)
        })
        .catch(error => {
            console.error('Error creating book:', error);
            res.status(500).json({ error: 'Failed to create book' });
        });
})

// PUT/update a book by ID
books.put('/:id', (req, res) => {
    books.findOneAndUpdate({ id: req.id.params.id }, req.body, { new: true })
        .then(updateBooks => {
            if (updateBooks) {
                res.json(foundBooks);
            } else {
                res.status(404).json({ error: 'Book not found' });
            }
        })
        .catch(error => {
            console.error('Error updating book:', error);
            res.status(500).json({ error: 'Failed to update book' });
        });
})

// DELETE a book by ID
books.delete('/:id', (req, res) => {
    Books.findOneAndDelete({ id: req.params.id })
        .then(deleteBook => {
            if (deleteBook) {
                res.json({ message: 'Successfully deleted' });
            } else {
                res.status(404).json({ error: 'Book not found' });
            }
        })
        .catch(error => {
            console.error('Failed to delete the book:', error);
            res.status(500).json({ error: 'Failed to delete the book' });
        });
})

module.exports = books;
