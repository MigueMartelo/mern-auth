import express from 'express';
import dotenv from 'dotenv';

import connectDB from './config/db.js';

import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();

connectDB();

const app = express();
const port = process.env.PORT || 8000;

app.use('/api/users', userRoutes);

app.get('/', (req, res) => res.send('Server is ready'));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
