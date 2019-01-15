const { tokenForUser, userDataToSend } = require('../../helpers/auth');

module.exports = ( req, resp ) => {

    try {
        resp.send({
            success: true,
            token: tokenForUser(req.user),
            user: userDataToSend(req.user)
        });

    } catch(err){
        resp.status(500).send('Error signing in');
    }
}