const Sequelize = require('sequelize');
const sequelize = require('../database/database');


const User = sequelize.define('users', {
    firstname: {
        type: Sequelize.STRING
    },
    lastname: { 
        type: Sequelize.STRING
    },
    number: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }
});

module.exports = User;