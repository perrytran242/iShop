const Sequelize = require('sequelize');
const { findByPid } = require('./interfaces');

module.exports =  (db, users) => {
    const Products = db.define('products', {
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
        image: {
            allowNull: true,
            type: Sequelize.STRING
        },
        name: {
            allowNull: false,
            type: Sequelize.STRING
        },
        pid: {
            allowNull: false,
            defaultValue: Sequelize.UUIDV4,
            type: Sequelize.UUID
        },
        price: {
            allowNull: false,
            type: Sequelize.FLOAT(7, 2)
        },
        quantity: {
            allowNull: true,
            type: Sequelize.INTEGER
        } 
    },{
        paranoid: true // <-- this allows you to 'softly' delete data from DB 
    });

    Products.belongsTo(users, { as: 'addedBy' });
    Products.findByPid = findByPid;

    return Products;
    
}