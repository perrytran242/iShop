const db = require('../');

const userStatuses = require('./user_statuses')(db);
const userTypes = require('./user_types')(db);

const users = require('./users')(db, userStatuses, userTypes);
const products = require('./products')(db, users); // it has to be AFTER users because we have to pass users INTO it!

module.exports = {
    products,
    users,
    userStatuses,
    userTypes
}
