// Tests are done here
const sequelize = require('../config/database');
const { Op } = require('sequelize');
const Payment = require('../models/Payment');
const Customer = require('../models/Customer');
const Address = require('../models/Address');

// ------------------------------------------------------------------------------------ //

async function testConnection() {
    try {
      await sequelize.authenticate();
      console.log('Conexão estabelecida com sucesso.');
    } catch (error) {
      console.error('Erro ao conectar:', error);
    } finally {
      // Fechar a conexão após o teste
      await sequelize.close();
    }
}

testConnection();

// ------------------------------------------------------------------------------------ //

// ------------------------------------------------------------------------------------ //