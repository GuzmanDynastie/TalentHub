import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { connectDB } from './config/connection.js';

// Inicializations
dotenv.config();
const app = express();

// Connect to DB
connectDB();

// Settings
app.set('port', process.env.PORT || 5000);

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json);
app.use(morgan('dev'));

// Routes

// Server listening
app.listen(app.get('port'), () => {
    console.log(`Servidor escuchando en el puerto ${app.get('port')}`);
}); 