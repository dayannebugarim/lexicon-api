import { notFound } from './protocols';
import { wordService } from './../services/wordService';
import { NextFunction, Request, Response } from "express";

// utiliza os services, requisição HTTP

export const wordController = {
    randomWordController: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const word = await wordService.randomWord();
            if (!word) notFound(res);
            res.json(word);
        } catch(err) {
            next(err);
        }
    },

    randomWordByLengthController: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const length = req.params.length;
            const word = await wordService.randomWordByLength(length);
            if (!word) notFound(res);
            res.json(word);
        } catch(err) {
            next(err);
        }
    },

    wordByPositionController: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const position = req.params.position;
            const word = await wordService.wordByPosition(position);
            if (!word) notFound(res);
            res.json(word);
        } catch(err) {
            next(err);
        }
    }
};
