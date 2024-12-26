// server.js
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const sessionsRoutes = require('./routes/sessions');
require('./config/passport')(passport);

const app = express();
const PORT = process.env.PORT || 3000;

// Conectar a MongoDB
mongoose.connect('mongodb+srv://backendcoder:mQNE9C3X0rAlgYQV@cluster0.3lruu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());

// Rutas
app.use('/api/sessions', sessionsRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});