// DEPENDENCIES
const express = require('express');
const books = express.Router();
const Books = require('../models/books');

books.get('/seed', (req, res) => {
    Books.insertMany([{
        "title": "The Shinobi Initiative",
        "description": "The reality-bending adventures of a clandestine service agency in the year 2166",
        "year": 2014,
        "quantity": 10,
        "imageURL": "https://imgur.com/LEqsHy5.jpeg"
    },
    {
        "title": "Tess the Wonder Dog",
        "description": "The tale of a dog who gets super powers",
        "year": 2007,
        "quantity": 3,
        "imageURL": "https://imgur.com/cEJmGKV.jpg"
    },
    {
        "title": "The Annals of Arathrae",
        "description": "This anthology tells the intertwined narratives of six fairy tales.",
        "year": 2016,
        "quantity": 8,
        "imageURL": "https://imgur.com/VGyUtrr.jpeg"
    },
    {
        "title": "Wâˆ€RP",
        "description": "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
        "year": 2010,
        "quantity": 4,
        "imageURL": "https://imgur.com/qYLKtPH.jpeg"
    }])
        .then(res.status(200).json({
            message: 'Seed successful'
        }))
        .catch(res.status(400).json({
            message: 'Seed unsuccessful'
        }))
})

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
        }); ``
});


//! DELETE a book by ID
books.delete('/:id', (req, res) => {
    const id = req.params.id; // Corrected line

    Books.findOneAndDelete({ _id: id })
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
