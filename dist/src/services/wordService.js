"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wordService = void 0;
const mongo_1 = require("./../database/mongo");
exports.wordService = {
    randomWord: async () => {
        const collection = mongo_1.MongoClient.collection;
        const data = collection.aggregate([{ $sample: { size: 1 } }]);
        for await (const doc of data) {
            return doc;
        }
        return null;
    },
    randomWordByLength: async (length) => {
        const collection = mongo_1.MongoClient.collection;
        const data = collection.aggregate([
            { $match: { length: length } },
            { $sample: { size: 1 } }
        ]);
        for await (const doc of data) {
            return doc;
        }
        return null;
    },
    wordByPosition: async (position) => {
        const collection = mongo_1.MongoClient.collection;
        const data = await collection.findOne({ position: position });
        return data || null;
    }
};
