const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Address = sequelize.define('Address', {
    address_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address2 :{
        type: DataTypes.STRING,
        allowNull: true
    },
    district: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city_id: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    postal_code: {
        type: DataTypes.STRING,
        allowNull: true
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    location: {
      type: DataTypes.GEOMETRY,
      allowNull: false  
    },
}, { tableName: 'address',timestamps: false});

Address.belongsTo(City,{
    foreignKey: 'city_id'
});

Address.belongsTo(City,{
    foreignKey: 'location'
});

module.exports = Address;