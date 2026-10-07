import express from 'express';
import apiRouter from './routes/index.js';
import { notFound, errorHandler } from './middlewares/error.middleware.js';

const app = express();

app.use(express.json());
app.use('/api', apiRouter);
app.use(notFound);
app.use(errorHandler);

export default app;
