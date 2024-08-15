import express from 'express';
import { router as statsRouter } from './stats/router.ts';

export const port = 3000;
export const app = express();

app.get('/', (req, res) => {
   res.send('Hello World!')
});

app.use('/stats', statsRouter);


