// DEPENDENCIES
const express = require('express');
const books = express.Router();
const Books = require('../models/books');

// INDEX/GET all books 
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

// SHOW/GET a single book by ID
books.get('/:id', (req, res) => {
    Books.findById(req.params.id)
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

// CREATE/POST a new book 
books.post('/', (req, res) => {
    const newBook = new Books(req.body)
    newBook.save()
        .then(savedBook => {
            res.status(201).json(savedBook)
        })
        .catch(error => {
            console.error('Error creating book:', error);
            res.status(500).json({ error: 'Failed to create book' });
        });
})

// PUT/update a book by ID
books.put('/:id', (req, res) => {
    const id = req.params.id; // Corrected line

    Books.findOneAndUpdate({ _id: id }, req.body, { new: true })
        .then(updatedBook => {
            if (updatedBook) {
                res.json(updatedBook);
            } else {
                res.status(404).json({ error: 'Book not found' });
            }
        })
        .catch(error => {
            console.error('Error updating book:', error);
            res.status(500).json({ error: 'Failed to update book' });
        });``
});


//! DELETE a book by ID
books.delete('/:id', (req, res) => {
    const id = req.params.id; // Corrected line
    
    Books.findOneAndDelete({ _id: id})
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
