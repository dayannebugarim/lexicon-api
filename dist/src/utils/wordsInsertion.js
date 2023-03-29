"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wordsInsertion = void 0;
const dotenv_1 = require("dotenv");
const dataFormatting_1 = require("./dataFormatting");
const mongo_1 = require("../database/mongo");
(0, dotenv_1.config)();
const wordsInsertion = async () => {
    try {
        const data = await (0, dataFormatting_1.dataFormatting)();
        const db = mongo_1.MongoClient.db;
        const wordsCollection = db.collection('words');
        const documentExists = await wordsCollection.findOne(data[0]);
        if (!documentExists) {
            const result = await wordsCollection.insertMany(data);
            console.log(`Inserted Count: ${result.insertedCount}`);
        }
        console.log('Exists!');
    }
    catch (err) {
        console.log(err);
    }
};
exports.wordsInsertion = wordsInsertion;
