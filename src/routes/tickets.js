import express from 'express';
import { createTicket, getTicketById, getTickets, deleteTicket } from '../controller/ticketController.js';

const router = express.Router();

router.get('/:id', getTicketById);
router.get('/', getTickets);
router.post('/', createTicket);
router.delete('/:id', deleteTicket);

export default router;
