import mongoose from 'mongoose';
import app from './app';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 4700;
const dbUrl = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000"

if (!dbUrl) {
  throw new Error('MONGO_URL не установлен в .env файле.');
}

const start = async () => {
  try {
    await mongoose.connect(dbUrl);
    console.log('Connected to MongoDB');

    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Server startup error:', error);
    process.exit(1);
  }
};

start();