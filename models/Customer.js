const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Address = require('./Address');

const Customer = sequelize.define('Customer', {
    customer_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    store_id: {
        type: DataTypes.TINYINT,
        allowNull: false
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
        type: DataTypes.STRING,
        allowNull: true
    },
    address_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    active: {
        type: DataTypes.TINYINT(1),
        allowNull: false
    },
    create_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    last_update: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, { tableName: 'customer', timestamps: false });

Customer.belongsTo(Address,{
    foreignKey: 'address_id'
});

module.exports = Customer;