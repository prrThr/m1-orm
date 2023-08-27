const sequelize = require('../config/database');
const { Op } = require('sequelize');
const prompt = require('prompt-sync')({ sigint: true });
const Payment = require('../models/Payment');
const Customer = require('../models/Customer');
const Address = require('../models/Address');
const functions = require('./utils/generalFunctions');

// ---------------------------------------------- //

let option;

while (option != 7) {
    while(option < 1 || option > 7) {
        console.log('1 - Mostrar clientes:');
        console.log('2 - Mostrar endereços:');
        console.log('3 - Mostrar pagamentos:');
        console.log('4 - Inserir cliente:');
        console.log('5 - Inserir endereço:');
        console.log('6 - Inserir pagamento:');
        console.log('7 - Sair');
        option = prompt('Selecione uma opção: ')
    }
    switch (option) {
        case 1:
            break;

        // ------------------------------------------------------- //

        case 2:
            break;

        // ------------------------------------------------------- //
        
        case 3:
            break;

        // ------------------------------------------------------- //
        
        case 4:
            break;

        // ------------------------------------------------------- //
        
        case 5:
            break;

        // ------------------------------------------------------- //
        
        case 6:
            break;

        // ------------------------------------------------------- //
        
        case 7:
            console.log('Saindo...');
            break;
    }
}

//functions.showCustomers();
//functions.showAddresses();
//functions.showPayments();