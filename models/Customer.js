const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Address = require('./Address');

const Customer = sequelize.define('Customer', {
    customer_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING
    },
    address_id: {
        type: DataTypes.INTEGER
    }
}, { tableName: 'customer', timestamps: false });

Customer.belongsTo(Address,{
    foreignKey: 'address_id'
});

module.exports = Customer;