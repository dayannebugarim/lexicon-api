import WordController from './../controllers/WordController';
import express from 'express';

export const router = express.Router();

router.get('/random', new WordController().randomWordController);

router.get('/:length/random', new WordController().randomWordByLengthController);

router.get('/position/:position', new WordController().wordByPositionController);