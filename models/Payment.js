const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Customer = require('./Customer');

const Payment = sequelize.define('Payment', {
    payment_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    staff_id: {
        type: DataTypes.TINYINT,
        allowNull: false
    },
    rental_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    amount: {
        type: DataTypes.DOUBLE, 
        allowNull: false 
    },
    payment_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    last_update: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, { tableName: 'payment',timestamps: false });

Payment.belongsTo(Customer, {
    foreignKey: 'customer_id'
});

module.exports = Payment;