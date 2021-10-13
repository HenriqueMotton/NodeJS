const Sequelize = require('sequelize');
const database = require('../db');

const Cliente = database.define('cliente', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING(30),
        allowNull: false
    }
})

module.exports = Cliente