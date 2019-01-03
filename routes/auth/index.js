const router = require('express').Router();
const { signUp } = require('../../controllers/auth');

router.post('/sign-up', signUp);

module.exports = router;