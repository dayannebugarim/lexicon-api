"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataFormatting = void 0;
const fs_1 = __importDefault(require("fs"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const dataFormatting = async () => {
    const data = await readFile();
    const wordsList = [];
    const trashData = data.split("\n").slice(0, 753);
    const filteredData = data.split("\n").slice(753);
    filteredData.map((word, index) => {
        if (!isInvalidWord(trashData, word)) {
            word = word.split("\r")[0];
            wordsList.push({
                word: word,
                position: (index + 1).toString(),
                length: word.length.toString(),
            });
        }
    });
    return wordsList;
};
exports.dataFormatting = dataFormatting;
const isInvalidWord = (trashData, word) => {
    return trashData.filter((invalidWord) => invalidWord.toUpperCase() === word.toUpperCase())[0];
};
const readFile = async () => {
    const path = process.env.FILE_PATH;
    if (!path)
        return '';
    const words = await new Promise((resolve, reject) => {
        fs_1.default.readFile(path, "utf8", (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    });
    return words;
};
