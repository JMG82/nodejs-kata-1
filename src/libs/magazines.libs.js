const DataFromCSVtoJSONLib = require('./dataFromCSVtoJSON.lib')
const BOOKS_PATH = "../../data/magazines.csv";

const MagazinesLib = {};

MagazinesLib.getMagazinesJson = () => {
    return DataFromCSVtoJSONLib.getDataJsonFormat(BOOKS_PATH);
}

MagazinesLib.findMagazine = (isbn) => {
    if (!isbn) return {"error": "You must give an isbn"};
    const magazinesJson = MagazinesLib.getMagazinesJson();
    const magazine = magazinesJson.find(magazine => magazine.isbn === isbn)
    if (!magazine) {
        return {"error": `Magazine ${isbn} not found`};
    }
    return magazine;
}

MagazinesLib.addMagazine = (magazine) => {
    if (!magazine) return {"error": "You must give a magazine"};
    const magazinesJson = MagazinesLib.getMagazinesJson();
    magazinesJson.push(magazine);

    // TODO: Convert JSON to CSV and write the data in the file

    return magazine;
}

module.exports = MagazinesLib;
