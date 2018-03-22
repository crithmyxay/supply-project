const Sequelize = require('sequelize');
const sequelize = require('../database/database');


const User = sequelize.define('users', {
    firstname: Sequelize.STRING,
    lastname: Sequelize.STRING,
    number: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING
});

module.exports = User;