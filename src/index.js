import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { connectDB, closeDB } from './config/connection.js';
import userRoutes from './routes/user.routes.js';

// Inicializations
dotenv.config();
const app = express();

// Connect to DB
let dbClient;
connectDB().then(client => {
    dbClient = client;
});

// Settings
const PORT = process.env.DB_PORT || 5000;

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use(userRoutes);

// Server listening
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

// Server closing
process.on('SIGINT', async () => {
    console.log('Cerrando el servidor...');
    await closeDB(dbClient);
    server.close(() => {
        console.log('Servidor cerrado.');
        process.exit(0);
    });
});