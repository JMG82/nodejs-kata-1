const DataFromCSVtoJSONLib = require('./dataFromCSVtoJSON.lib')
const AUTHORS_PATH = "../../data/authors.csv";

const AuthorsLib = {};

AuthorsLib.getAuthorsJson = () => {
    return DataFromCSVtoJSONLib.getDataJsonFormat(AUTHORS_PATH);
}

module.exports = AuthorsLib;
