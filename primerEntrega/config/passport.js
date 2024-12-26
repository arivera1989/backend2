// path/to/config/passport.js
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/User');
const bcrypt = require('bcrypt');

module.exports = (passport) => {
    // Estrategia local para login
    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    }, async (email, password, done) => {
        const user = await User.findOne({ email });
        if (!user || !bcrypt.compareSync(password, user.password)) {
            return done(null, false, { message: 'Credenciales incorrectas' });
        }
        return done(null, user);
    }));

    // Estrategia JWT
    const opts = {
        jwtFromRequest: ExtractJwt.fromExtractors([(req) => req.cookies.jwt]),
        secretOrKey: 'la_clave_archisecre_ta'
    };

    passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
        try {
            const user = await User.findById(jwt_payload.id);
            if (user) {
                return done(null, user);
            }
            return done(null, false);
        } catch (error) {
            return done(error, false);
        }
    }));
};