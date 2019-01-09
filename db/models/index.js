const db = require('../');

const userStatuses = require('./user_statuses')(db);
const userTypes = require('./user_types')(db);

const users = require('./users')(db, userStatuses, userTypes);

module.exports = {
    users,
    userStatuses,
    userTypes
}
