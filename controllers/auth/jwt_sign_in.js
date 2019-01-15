const { userDataToSend } = require('../../helpers/auth');

module.exports = ( req, resp ) => {
    try {
        resp.send({
            success: true,
            user: userDataToSend(req.user)
        });
    } catch(err){
        resp.status(500).send('Error with JWT sign in');
    }
}