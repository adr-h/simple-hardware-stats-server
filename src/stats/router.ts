import express from 'express';
import { getStats } from './services.ts';

export const router = express.Router();

router.get('/raw', async (req, res) => {
   const stats = await getStats();

   return res.status(200).send({
      ...stats
   });
});
