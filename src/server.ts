
import express from 'express'
import { config } from 'dotenv';
import { Request, Response } from 'express';
import { MongoClient } from './database/mongo';

const main = async () => {
    config();
    const app = express();
    await MongoClient.connect();
    const port = process.env.PORT || 8000;

    app.get('/test', (req: Request, res: Response) => {
        res.json({ message: 'NodeJS with Typescript' });
    });

    app.listen(port, () => {
        console.log(`Running at http://localhost:${port}`);
    });
}

main();