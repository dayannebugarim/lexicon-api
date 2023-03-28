import axios from 'axios';
import { config } from 'dotenv';

beforeEach(() => {
    config();
});

describe('GET /word/random', () => {
    it('should return a random word data', async () => {
        const port = process.env.PORT || 8000;
        const url = `http://localhost:${port}/word/random`;
        const response = await axios.get(url);
        expect(response.status).toBe(200);
    });
});

describe('GET /word/:length/random', () => {
    it('should return a random word data when the length is valid', async () => {
        const port = process.env.PORT || 8000;
        const wordLength = "5";
        const url = `http://localhost:${port}/word/${wordLength}/random`;
        const response = await axios.get(url);
        const data = response.data;
        expect(response.status).toBe(200);
        expect(data.length).toBe(wordLength);
    });

    it('should return a not found error when the length is invalid', async () => {
        const port = process.env.PORT || 8000;
        const wordLength = "50";
        const url = `http://localhost:${port}/word/${wordLength}/random`;
        let status = 200;
        let message = '';
        await axios.get(url)
            .catch((err) => {
                status = err.response.status;
                message = err.response.data.error;
            });
        expect(status).toBe(404);
        expect(message).toBe('Word Not Found');
    });
});

describe('GET /word/position/:position', () => {
    it('should return the word data when the position is valid', async () => {
        const port = process.env.PORT || 8000;
        const wordPosition = "726";
        const url = `http://localhost:${port}/word/position/${wordPosition}`;
        const response = await axios.get(url);
        const data = response.data;
        expect(response.status).toBe(200);
        expect(data.position).toBe(wordPosition);
    });

    it('should return a not found error when the position is invalid', async () => {
        const port = process.env.PORT || 8000;
        const wordPosition = "0";
        const url = `http://localhost:${port}/word/position/${wordPosition}`;
        let status = 200;
        let message = '';
        await axios.get(url)
            .catch((err) => {
                status = err.response.status;
                message = err.response.data.error;
            });
        expect(status).toBe(404);
        expect(message).toBe('Word Not Found');
    });
});