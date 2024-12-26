// path/to/routes/sessions.js
const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

router.post('/register', async (req, res) => {
    const { first_name, last_name, email, age, password } = req.body;
    try {
        const newUser = new User({ first_name, last_name, email, age, password });
        await newUser.save();
        res.status(201).json({ message: 'Usuario creado exitosamente' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.post('/login', passport.authenticate('local', { session: false }), (req, res) => {
    const token = jwt.sign({ id: req.user._id }, 'tu_secreto_jwt', { expiresIn: '1h' });
    res.cookie('jwt', token, { httpOnly: true });
    res.json({ user: req.user, token });
});

router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
    if (req.user) {
        return res.json(req.user);
    } else {
        return res.status(401).json({ message: 'No autorizado' });
    }
});

module.exports = router;