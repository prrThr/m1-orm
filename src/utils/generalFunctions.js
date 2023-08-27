const Payment = require('../../models/Payment');
const Customer = require('../../models/Customer');
const Address = require('../../models/Address');

// ------------------------------------------------------------------------//

async function showPayments(){
    const payments = await Payment.findAll();
    for (let payment of payments) {
        try {
            let selectedCustomer = await Customer.findByPk(payment.customer_id, { logging: false });
            let customerPayment = await selectedCustomer.getDataValue('first_name');
            console.log(`ID: ${payment.payment_id} | Customer: ${customerPayment}`)
        } catch (err) {
            console.log("Error log: ", err);
        }
    }

}

// ------------------------------------------------------------------------//

async function showAddresses(){
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


async function showCustomers() {
    const customers = await Customer.findAll();
    
    for (let customer of customers) {
        try {
            let selectedCustomer = await Address.findByPk(customer.address_id, { logging: false });
            let customerAddress = await selectedCustomer.getDataValue('address');
            console.log(`ID: ${customer.customer_id} | Name: ${alignText(customer.first_name, 10)} | AddressID: ${customer.address_id} | Endereço: ${customerAddress}`);
        } catch (error) {
            console.log("Error log: ", error);
        }
    }
}


// ------------------------------------------------------------------------//

module.exports = {
    showAddresses,
    showAddressesLinedUp,
    showCustomers,
    showPayments
};