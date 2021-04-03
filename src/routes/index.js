import express from 'express';
import { ok } from '../utils';
import userRoutes from './user'

const router = express();

router.get('/', (req, res) =>
  ok(res, {
    status: res.statusCode,
    message: 'Welcome to Volunteer Spark API',
  }),
);

router.use('/users', userRoutes);

export default router;
