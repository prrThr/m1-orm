const sequelize = require('../config/database');
const { Op } = require('sequelize');
const Payment = require('../models/Payment');
const Customer = require('../models/Customer');
const Address = require('../models/Address');
const functions = require('./utils/generalFunctions');

// ---------------------------------------------- //
//functions.showCustomers();
functions.mostrarEndereco();