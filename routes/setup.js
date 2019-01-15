const passport = require('passport');
require('../services/passport');

exports.requireSignIn = passport.authenticate('local', { session: false });