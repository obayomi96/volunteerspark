import express from 'express';
import { ok } from '../utils';

const router = express();

router.get('/', (req, res) =>
   ok(res, {
    status: res.statusCode,
    message: 'Welcome to Volunteer Spark API',
  }),
);

export default router;
