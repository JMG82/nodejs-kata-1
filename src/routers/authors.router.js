const express = require('express');

const AuthorsLib = require('../libs/authors.libs')

const PreRouter = function() {

    const AuthorsRouter = express.Router();

    // Convert csv to json to easily manipulate it
    const authorsJson = AuthorsLib.getAuthorsJson();

    AuthorsRouter.get('/authors', (req,res) => {
        res.status(200).json(authorsJson)
    })

    return AuthorsRouter;
};

module.exports = PreRouter;
