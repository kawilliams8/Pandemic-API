import express from 'express';
import { testEnvironmentVariable } from '../settings';

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => res.status(200).json({ message: testEnvironmentVariable }));
indexRouter.get('/about', (req, res) => res.status(200).json({ message: 'About Page' }));

export default indexRouter;
