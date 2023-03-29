"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wordController = void 0;
const protocols_1 = require("./protocols");
const wordService_1 = require("./../services/wordService");
// utiliza os services, requisição HTTP
exports.wordController = {
    randomWordController: async (req, res, next) => {
        try {
            const word = await wordService_1.wordService.randomWord();
            if (!word)
                (0, protocols_1.notFound)(res);
            res.json(word);
        }
        catch (err) {
            next(err);
        }
    },
    randomWordByLengthController: async (req, res, next) => {
        try {
            const length = req.params.length;
            const word = await wordService_1.wordService.randomWordByLength(length);
            if (!word)
                (0, protocols_1.notFound)(res);
            res.json(word);
        }
        catch (err) {
            next(err);
        }
    },
    wordByPositionController: async (req, res, next) => {
        try {
            const position = req.params.position;
            const word = await wordService_1.wordService.wordByPosition(position);
            if (!word)
                (0, protocols_1.notFound)(res);
            res.json(word);
        }
        catch (err) {
            next(err);
        }
    }
};
