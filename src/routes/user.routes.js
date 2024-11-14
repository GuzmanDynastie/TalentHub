import { Router } from "express";
import { createUser, getAllUsers } from '../controller/user.controller.js'

const router = Router();

router.get('/user', getAllUsers);
router.post('/user', createUser);

export default router;