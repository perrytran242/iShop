const jwt = require('jwt-simple');
const { secret } = require('../config').jwtConfig;

exports.userDataToSend = (user) => {
    return {
        name: `${user.firstName} ${user.lastName[0].toUpperCase()}.`,
        email: user.email,
        pid: user.pid
    }
}

exports.tokenForUser = (user) => {
    return jwt.encode({ // <-- the fist parameter of 'encode' is whatever data you want to encode !! 
        uid: user.id,
        ts: new Date().getTime() // <-- time stamp! 
    }, secret ); // <-- second argument / parameter is the secret
}

//Below: is a shortcut for above code! //

// exports.tokenForUser = user => jwt.encode({
//         uid: user.id,
//         ts: new Date().getTime() 
// }, secret ); 