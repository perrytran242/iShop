const Sequelize = require('sequelize');
const { findByMid } = require('./interfaces');

module.exports = db => {
    const UserStatuses = db.define('userStatuses', {
        description: {
            allowNull: true,
            type: Sequelize.STRING
        },
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        mid: {  // <--- 'machine id" 
            allowNull: false,
            type: Sequelize.STRING
        },
        name: {
            allowNull: false,
            type: Sequelize.STRING
        }
    }, {
        paranoid: true
    });

    UserStatuses.findByMid = findByMid;

    return UserStatuses;
}