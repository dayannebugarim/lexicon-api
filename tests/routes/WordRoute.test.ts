import axios from 'axios';
import { config } from 'dotenv';

beforeEach(() => {
    config();
});

it('should successfully access /word/random (GET)', async () => {
    const port = process.env.PORT || 8000;
    const url = `http://localhost:${port}/word/random`;
    const response = await axios.get(url);
    expect(response.status).toBe(200);
});

it('should successfully access /word/:length/random (GET)', async () => {
    const port = process.env.PORT || 8000;
    const wordLength = 5;
    const url = `http://localhost:${port}/word/${wordLength}/random`;
    const response = await axios.get(url);
    expect(response.status).toBe(200);
});

it('should successfully access /word/position/:position (GET)', async () => {
    const port = process.env.PORT || 8000;
    const wordPosition = 26;
    const url = `http://localhost:${port}/word/position/${wordPosition}`;
    const response = await axios.get(url);
    expect(response.status).toBe(200);
});