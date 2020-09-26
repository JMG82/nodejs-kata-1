const DataFromCSVtoJSONLib = require('./dataFromCSVtoJSON.lib')
const BOOKS_PATH = "../../data/books.csv";

const BooksLib = {};

BooksLib.getBooksJson = () => {
    return DataFromCSVtoJSONLib.getDataJsonFormat(BOOKS_PATH);
}

BooksLib.findBook = (isbn) => {
    if (!isbn) return {"error": "You must give an isbn"};
    const booksJson = BooksLib.getBooksJson();
    const book = booksJson.find(book => book.isbn === isbn)
    if (!book) {
        return {"error": `Book ${isbn} not found`};
    }
    return book;
}

BooksLib.findBookByAuthor = (authors) => {
    if (!authors) return {"error": "You must give an author"};
    const booksJson = BooksLib.getBooksJson();
    const authorsToFind = authors.split(',')
    const books = booksJson.filter(book => {
        // Get authors as array
        const bookAuthors = book.authors.split(',');
        // Check if one author in the find request
        if (authorsToFind && authorsToFind.length === 1) {
            return bookAuthors.includes(authorsToFind[0]);
        }
        // Check if more than one author in the find request
        const result = authorsToFind.some((author) => !bookAuthors.includes(author));
        return !result;
    })
    if (books && books.length === 0) {
        return {"error": `0 book found for ${authors}`};
    }
    return books;
}

module.exports = BooksLib;
