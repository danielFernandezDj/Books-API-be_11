// DEPENDENCIES
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

// CONFIGURATION
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

// Create express app
const app = express();
app.use(cors())

// Connect to MongoDB using Promises
mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB:', MONGO_URI);
        // Start the server after successful connection
        app.listen(PORT, () => {
            console.log('Server is running on port:', PORT);
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Welcome to the Big Books! API');
    res.json({ msg: 'This is CORS-enabled for all origins!' })
});

// REQUIRE CONTROLLERS
const booksController = require('./controllers/books_controller');
app.use('/books', booksController);
