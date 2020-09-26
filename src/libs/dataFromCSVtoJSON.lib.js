const csvToJson = require('convert-csv-to-json');
const path = require("path");

const DataFromCSVtoJSONLib = {};

DataFromCSVtoJSONLib.getDataJsonFormat = (stringPath) => {
    return csvToJson.getJsonFromCsv(path.resolve(__dirname, stringPath));
}

module.exports = DataFromCSVtoJSONLib;
