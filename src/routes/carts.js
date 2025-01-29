import express from 'express';
import { createCart, addProductToCart, removeProductFromCart, deleteCart, getCartById } from '../controller/cartController.js';

const router = express.Router();

router.get('/:id', getCartById); 
router.post('/', createCart); 
router.post('/add', addProductToCart); 
router.delete('/remove', removeProductFromCart); 
router.delete('/:id', deleteCart);

export default router;
