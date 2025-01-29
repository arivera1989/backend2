import express from 'express';
import dotenv from 'dotenv'; 
import { config } from './config/config.js';
import connectDB from './config/db.js';
import cartsRoutes from './routes/carts.js';
import productsRoutes from './routes/products.js';
import ticketsRoutes from './routes/tickets.js';
import sessionsRoutes from './routes/sessions.js';
import { errorHandler } from './middlewares/errorHandler.js';
import cors from 'cors';

dotenv.config(); 

const app = express();
const PORT = config.port; 
const connection = connectDB(config.mongoUri);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/carts', cartsRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/tickets', ticketsRoutes);
app.use('/api/sessions', sessionsRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running in: http://localhost:${PORT}`);
});