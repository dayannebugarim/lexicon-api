import express from 'express';

export const router = express.Router();

router.get('/random', (req, res) => {
    res.json({ message: 'route /word/random' });
});

router.get('/:length/random', (req, res) => {
    const length = req.params.length;
    res.json({ message: `route /word/${length}/random` });
});

router.get('/position/:position', (req, res) => {
    const position = req.params.position;
    res.json({ message: `route /position/${position}` });
});