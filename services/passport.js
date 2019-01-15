const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const localStrategy = require('passport-local');
const { users } = require('../db/models');
const { secret } = require('../config').jwtConfig;

const localOptions = {
    usernameField: 'email'
};

const localLogin = new localStrategy(localOptions, async (email, password, done) => {
    try {
        email = email.toLowerCase();

        const user = await users.findOne( { where: { email } });

        if(!user) return done(null, false);
        
        const isMatch = await user.comparePasswords(password);

        if(!isMatch) return done(null, false);

        done(null, user);
    } catch(err){
        done(err);
    }
});

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'), // <-- this means we will send it on our 'authorization' header
    secretOrKey: secret
};

const jwtLogin = new JwtStrategy(jwtOptions, async ( payload, done ) => {
    try {
        const user = await users.findByPk(payload.uid);

        if(!user) return done(null, false);

        done(null, user);
    } catch(err){
        done(null, false);
    }
});

passport.use(jwtLogin);
passport.use(localLogin);