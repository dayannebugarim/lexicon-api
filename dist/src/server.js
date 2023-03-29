"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const WordRoute_1 = require("./routes/WordRoute");
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const mongo_1 = require("./database/mongo");
const main = async () => {
    (0, dotenv_1.config)();
    const app = (0, express_1.default)();
    await mongo_1.MongoClient.connect();
    const port = process.env.PORT || 8000;
    app.use('/word', WordRoute_1.router);
    app.listen(port, () => {
        console.log(`Running at http://localhost:${port}`);
    });
};
main();
