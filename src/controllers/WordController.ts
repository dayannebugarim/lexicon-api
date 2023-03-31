import { notFound } from './protocols';
import WordService from './../services/WordService';
import { NextFunction, Request, Response } from "express";

export default class WordController {
    async randomWordController (req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const word = await new WordService().randomWord();
            if (!word) notFound(res);
            res.json(word);
        } catch(err) {
            next(err);
        }
    }

    async randomWordByLengthController (req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const length = req.params.length;
            const word = await new WordService().randomWordByLength(length);
            if (!word) notFound(res);
            res.json(word);
        } catch(err) {
            next(err);
        }
    }

    async wordByPositionController (req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const position = req.params.position;
            const word = await new WordService().wordByPosition(position);
            if (!word) notFound(res);
            res.json(word);
        } catch(err) {
            next(err);
        }
    }
}
