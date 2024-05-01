import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import user from './routes/user.js';

const app = express();
const db = mongoose.connection;

//Define connection mongodb
mongoose.connect('mongodb://localhost:27017/binus_crud', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected...'));
app.use(cors());
app.use(express.json());
app.use(user);
app.listen(3001, () => console.log('Server Running sucessfully...'));
