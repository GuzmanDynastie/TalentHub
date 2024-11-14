import { connectDB } from '../config/connection.js';
import bcrypt from 'bcrypt';

const hashPassword = async (password) => {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
};

const createUserTable = async () => {
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE, 
            password VARCHAR(255) NOT NULL
        );
    `;
    try {
        const client = await connectDB();
        await client.query(createTableQuery);
        client.release();
    } catch (e) {
        console.error('Error al crear la tabla: ', {e});
    }
};

createUserTable();

// Create User
const addUser = async (username, email, password) => {
    const hashedPassword = await hashPassword(password);

    const insertQuery = 'INSERT INTO users (username, email, password) VALUES($1, $2, $3)';
    const values = [username, email, hashedPassword];

    try {
        const client = await connectDB();
        await client.query(insertQuery, values);
        console.log('Usuario agregado exitosamente.');
        client.release();
    } catch (e) {
        console.error('Error al agregar usuarios: ', { e });
    }
};

// Get all users
const getUsers = async () => {
    const selectQuery = 'SELECT * FROM users';

    try {
        const client = await connectDB();
        const result = await client.query(selectQuery);
        return result.rows;
    } catch (e) {
        console.error('Error al obtener usuarios: ', { e });
    }
};

export { addUser, getUsers };