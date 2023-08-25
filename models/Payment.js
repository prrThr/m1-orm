const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Payment = sequelize.define('Payment', {
    payment_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    amount: {
        type: DataTypes.DOUBLE, 
        allowNull: false 
    },
    staff_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {tableName: 'payment',timestamps: false});

module.exports = Payment;