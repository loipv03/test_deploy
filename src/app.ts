import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser'
import connectDB from './config/database'
import authRouter from './router/auth';
import errorHandler from './middleware/errorMiddleware';

dotenv.config();

const MONGODB_URI: string = process.env.MONGODB_URI as string;

const app = express()

app.use(cookieParser());

app.use(express.json())
app.use(cors())

app.use('/api', authRouter)

app.use(errorHandler);

const PORT = process.env.PORT || 3000;



connectDB(MONGODB_URI)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export const viteNodeApp = app