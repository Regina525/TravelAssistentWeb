import express from 'express';
import { addUser, login, logout } from '../controllers/auth.js';

const router = express.Router()

router.post('/register',addUser)
router.post('/login',login)
router.post('/logout',logout)

export default router;