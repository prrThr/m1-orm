const sequelize = require('../../config/database');
const { Op } = require('sequelize');
const Payment = require('../../models/Payment');
const Customer = require('../../models/Customer');
const Address = require('../../models/Address');

// ------------------------------------------------------------------------//

async function showCustomers(){
    const customers = await Customer.findAll();
    customers.forEach(customer => {
        console.log(`ID: ${customer.customer_id} AddressID: ${customer.address_id} Name: ${customer.first_name}`);
    })
}

// ------------------------------------------------------------------------//

async function mostrarEndereco(){
    let selectedAddress = await Address.findAll();
    selectedAddress.forEach(address => {
        console.log("Id:", address.address_id, "|Endereço:", address.address, "|Distrito:", address.district, "|Id Cidade:", address.city_id, "|Código postal:",
        address.postal_code, "|Telefone:", address.phone);
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
  
  async function mostrarEnderecoAlinhado(){
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

module.exports = {
    showCustomers,
    mostrarEndereco,
    mostrarEnderecoAlinhado
};