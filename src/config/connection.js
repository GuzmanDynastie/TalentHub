import dotenv from "dotenv";
import pkg from "pg";

dotenv.config();
const { Client } = pkg;

const connectionData = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    ssl: {
        rejectUnauthorized: true,
        ca: process.env.DB_SSL_CERT,
    },
}

const client = new Client(connectionData);

const connectDB = async () => {
    try {
        await client.connect();
        console.log('Conectado a la base de datos');
    } catch (e) {
        console.error('Error en la conexion a la base de datos: ', { e });
    }
};

export { connectDB, client };