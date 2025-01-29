import { Router } from 'express';
import { registerUser, loginUser, logout, currentUser } from '../controller/authController.js';
import { isAuthenticated } from '../middlewares/authMiddleware.js';
const router = Router();

router.get('/current', isAuthenticated, currentUser);
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logout);


export default router;
