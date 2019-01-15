const passport = require('passport');
require('../services/passport');

exports.requireBasicAuth = passport.authenticate('jwt', { session: false });
exports.requireSignIn = passport.authenticate('local', { session: false });