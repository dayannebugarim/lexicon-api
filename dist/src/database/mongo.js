"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoClient = void 0;
const mongodb_1 = require("mongodb");
exports.MongoClient = {
    client: undefined,
    db: undefined,
    collection: undefined,
    async connect() {
        const url = process.env.MONGODB_URL || "localhost:27017";
        const username = process.env.MONGODB_USERNAME;
        const password = process.env.MONGODB_PASSWORD;
        const client = new mongodb_1.MongoClient(url, { auth: { username, password } });
        const db = client.db(process.env.MONGODB_DATABASE);
        const collection = db.collection(process.env.MONGODB_COLLECTION || 'words');
        this.client = client;
        this.db = db;
        this.collection = collection;
        console.log("Connected to MongoDB!");
    }
};
