import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const SERVER_PORT = process.env.SERVER_PORT || 3000;

app.use(express.json());

// Kết nối MongoDB
mongoose.connect(process.env.MONGODB_URI || '', {
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Đường dẫn mẫu
app.get('/', (req, res) => {
    res.send('Hello World! Hello World! Hello World! Hello World!');
});

// Khởi động server
app.listen(SERVER_PORT, () => {
    console.log(`Server is running on port ${SERVER_PORT}`);
});

export const viteNodeApp = app
