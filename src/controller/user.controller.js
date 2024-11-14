import { addUser, getUsers } from "../models/user.models.js";

// Create user
const createUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        await addUser(username, email, password);
        res.status(201).json({ message: 'Usuario creado exitossamente.' });
    } catch (e) {
        res.status(500).json({ message: 'Error al crear el usuario: ', e });
    }
}

// Get all users
const getAllUsers = async (req, res) => {
    try {
        const users = await getUsers();
        res.status(200).json({ users });
    } catch (e) {
        res.status(500).jsson({ message: 'Error al obtener los usuarios: ', e });
    }
}

export { createUser, getAllUsers };