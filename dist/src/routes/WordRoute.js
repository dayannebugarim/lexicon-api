"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const wordController_1 = require("./../controllers/wordController");
const express_1 = __importDefault(require("express"));
exports.router = express_1.default.Router();
exports.router.get('/random', wordController_1.wordController.randomWordController);
exports.router.get('/:length/random', wordController_1.wordController.randomWordByLengthController);
exports.router.get('/position/:position', wordController_1.wordController.wordByPositionController);
