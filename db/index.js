const Sequelize = require('sequelize');
const { host, username, password, database} = require('../config').dbConfig;

const sequelize = new Sequelize(database, username, password, {
    host,
    dialect: 'mysql',
    logging: false,
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

sequelize.authenticate().then(() => {
    console.log('Connected to MySQL DB');
}).catch(err => {
    console.log('Error connecting to MySQL DB');
});

module.exports = sequelize;

require('./models');

sequelize.sync();