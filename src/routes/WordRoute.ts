import { wordController } from './../controllers/wordController';
import express from 'express';

export const router = express.Router();

router.get('/random', wordController.randomWordController);

router.get('/:length/random', wordController.randomWordByLengthController);

router.get('/position/:position', wordController.wordByPositionController);