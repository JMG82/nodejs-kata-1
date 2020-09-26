const express = require('express');

const MagaznesLib = require('../libs/magazines.libs')

const PreRouter = function() {

    const MagazinesRouter = express.Router();

    // Convert csv to json to easily manipulate it
    const magazinesJson = MagaznesLib.getMagazinesJson();

    MagazinesRouter.get('/magazines', (req,res) => {
        res.status(200).json(magazinesJson)
    })

    MagazinesRouter.get('/magazine/:isbn', (req,res) => {
        const isbn = req.params.isbn;
        const magazine = MagaznesLib.findMagazine(isbn)
        res.status(200).json(magazine)
    })

    MagazinesRouter.post('/magazine', (req,res) => {
        const newMagazine = req.body;
        const magazineAdded = MagaznesLib.addMagazine(newMagazine)
        res.status(200).json(magazineAdded)
    })

    return MagazinesRouter;
};

module.exports = PreRouter;
