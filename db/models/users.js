const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');
const { findByPid } = require('./interfaces');


module.exports = (db,  userStatuses, userTypes) => {
   const Users = db.define('users', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    email: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
    },
    firstName: {
        allowNull: false,
        type: Sequelize.STRING,
    },
    lastName: {
        allowNull: false,
        type: Sequelize.STRING,
    },
    password: {
        allowNull: false,
        type: Sequelize.STRING(60),
    },
    pid: {
        allowNull: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
    }
   }, {
       hooks: {
           beforeCreate: async user => { // <-- this will call a function before saving to the DB! 
              // below we will hash the password before it gets saved to the DB!
               const hash = await bcrypt.hash(user.password, 10);

               user.password = hash;
               user.email = user.email.toLowerCase();
           }
       },
       paranoid: true // <-- this allows you to 'softly' delete data from DB  
   });

   Users.belongsTo(userStatuses); // 'belongsTo' creates the indexing between the two tables (users and userStatuses)
   Users.belongsTo(userTypes); // 'belongsTo' creates the indexing between the two tables (users and userTypes)

   Users.prototype.comparePasswords = function(candidatePassword){
       return new Promise((resolve, reject) => {
           bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
               if(err){
                   return reject(err)
               }

               resolve(isMatch);
           });
       });
   }

   Users.findByPid = findByPid;

   return  Users;
}
