import dotenv from "dotenv";
import pkg from "pg";

dotenv.config();
const { Pool } = pkg;

const pool = new Pool ({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    ssl: {
        rejectUnauthorized: true,
        ca: process.env.DB_SSL_CERT,
    },
});

const connectDB = async () => {
    const client = await pool.connect();
    return client;
};

const closeDB = async (client) => {
    if (client) {
        client.release();
    }
};

export { connectDB, closeDB };