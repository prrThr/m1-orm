const Payment = require('../../models/Payment');
const Customer = require('../../models/Customer');
const Address = require('../../models/Address');
const prompt = require('prompt-sync')({ sigint: true });

// ------------------------------------------------------------------------//

async function Payments(){
    console.log('1 - Mostrar todos (+ 16 mil registros)');
    console.log('2 - Mostrar os 100 primeiros');
    console.log('3 - Mostrar os 100 últimos');
    const input = parseInt(prompt('Selecione a opção: '));
    let showFunc;

    switch (input) {
        case 1:
            break;

        case 2:
            showFunc = { limit: 100 };
            break;

        case 3:
            showFunc = {
                order: [['payment_id', 'DESC']], // Ordena por payment_id em ordem descendente
                limit: 100
            };
    }

    const payments = await Payment.findAll(showFunc);
    for (let payment of payments) {
        try {
            let selectedCustomer = await Customer.findByPk(payment.customer_id, { logging: false });
            let customerPayment = await selectedCustomer.getDataValue('first_name');
            console.log(`ID: ${payment.payment_id} | IDCliente: ${payment.customer_id} | Cliente: ${customerPayment} R$ ${payment.amount}`)
        } catch (err) {
            console.log("Error log: ", err);
        }
    }
}


// ------------------------------------------------------------------------//

async function Addresses(){
    let selectedAddress = await Address.findAll();
    selectedAddress.forEach(address => {
        console.log(`ID: ${address.address_id} | Código postal: ${address.postal_code} | Tel: ${address.phone} | IDCidade: ${address.city_id}
        | ${address.address} | Distrito: ${address.district}
        `);
    });
}

// ------------------------------------------------------------------------//

function alignText(text, width) {
    if (text.length >= width) {
        return text.substring(0, width);
    }
    const spaces = " ".repeat(width - text.length);
    return text + spaces;
  }
  
  async function showAddressesLinedUp(){
    let selectedAddress = await Address.findAll();
    selectedAddress.forEach(address => {
        const formattedId = alignText(address.address_id.toString(), 4);
        const formattedAddress = alignText(address.address, 40);
        const formattedDistrict = alignText(address.district, 22);
        const formattedCityId = alignText(address.city_id.toString(), 4);
        const formattedPostalCode = alignText(address.postal_code, 6);
        const formattedPhone = alignText(address.phone, 15);
  
        console.log(`Id: ${formattedId} | Endereço: ${formattedAddress} | Distrito: ${formattedDistrict} | Id Cidade: ${formattedCityId} | Código postal: ${formattedPostalCode} | Telefone: ${formattedPhone}`);
    });
  }

// ------------------------------------------------------------------------//


async function Customers() {
    const customers = await Customer.findAll();
    
    for (let customer of customers) {
        try {
            let selectedCustomer = await Address.findByPk(customer.address_id, { logging: false });
            let customerAddress = await selectedCustomer.getDataValue('address');
            console.log(`ID: ${customer.customer_id} | ${alignText(customer.first_name, 10)} | AddressID: ${customer.address_id} | ${customerAddress}`);
        } catch (error) {
            console.log("Error log: ", error);
        }
    }
}


// ------------------------------------------------------------------------//

module.exports = {
    Addresses,
    showAddressesLinedUp,
    Customers,
    Payments
};