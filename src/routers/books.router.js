const express = require('express');

const BooksLib = require('../libs/books.libs')

const PreRouter = function() {

    const BooksRouter = express.Router();

    // Convert csv to json to easily manipulate it
    const booksJson = BooksLib.getBooksJson();

    BooksRouter.get('/books', (req,res) => {
        res.status(200).json(booksJson)
    })

    BooksRouter.get('/book/:isbn', (req,res) => {
        const isbn = req.params.isbn;
        const book = BooksLib.findBook(isbn)
        res.status(200).json(book)
    })

    BooksRouter.get('/books/authors/:authors', (req,res) => {
        const authors = req.params.authors;
        const book = BooksLib.findBookByAuthor(authors)
        res.status(200).json(book)
    })

    return BooksRouter;
};

module.exports = PreRouter;
