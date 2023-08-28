const Payment = require('../../models/Payment');
const Customer = require('../../models/Customer');
const Address = require('../../models/Address');
const prompt = require('prompt-sync')({ sigint: true });
const sequelize = require('../../config/database');

// ------------------------------------------------------------------------//

async function address(){

}

// ------------------------------------------------------------------------//

async function customer(store_id,first_name,last_name,email,address_id) {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        let customer = {
            store_id: store_id,
            first_name: first_name,
            last_name: last_name,
            email: email,
            address_id: address_id,
            active: 1,
            create_date:  sequelize.literal('CURRENT_TIMESTAMP(3)'),
            last_update:  sequelize.literal('CURRENT_TIMESTAMP(3)'),
        };
        let returnedObject = await Customer.create(customer);
        console.log("New customer:", customer, returnedObject);
        let generatedKey = returnedObject.dataValues.customer_id;
        console.log("Generated key", generatedKey);
    } catch (error) {
        console.error("Error log", error);
    }
}

// ------------------------------------------------------------------------//

async function payment(){
    
}

// ------------------------------------------------------------------------//

module.exports = {
    address,
    customer,
    payment
};