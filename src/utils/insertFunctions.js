const Payment = require('../../models/Payment');
const Customer = require('../../models/Customer');
const Address = require('../../models/Address');
const sequelize = require('../../config/database');

// ------------------------------------------------------------------------//

async function address(address,address2,district,city_id,postal_code,phone,location) {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        let endereco = {
            address: address,
            address2: address2,
            district: district,
            city_id: city_id,
            postal_code: postal_code,
            phone: phone,
            location:  sequelize.literal(location),
            last_update:  sequelize.literal('CURRENT_TIMESTAMP(3)'),
        };
        let returnedObject = await Address.create(endereco);
        console.log("Novo endereço:", endereco, returnedObject);
        let generatedKey = returnedObject.dataValues.address_id;
        console.log("Generated key", generatedKey);
    } catch (error) {
        console.error("Error log", error);
    }
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
        console.log("Novo cliente:", customer, returnedObject);
        let generatedKey = returnedObject.dataValues.customer_id;
        console.log("Generated key", generatedKey);
    } catch (error) {
        console.error("Error log", error);
    }
}

// ------------------------------------------------------------------------//

async function payment(customer_id,staff_id,rental_id,amount,payment_date) {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        let payment = {
            customer_id: customer_id,
            staff_id: staff_id,
            rental_id: rental_id,
            amount: amount,
            payment_date: payment_date,
            last_update: sequelize.literal('CURRENT_TIMESTAMP')
        };
        let returnedObject = await Payment.create(payment);
        console.log("Novo pagamento:", payment, returnedObject);
        let generatedKey = returnedObject.dataValues.payment_id;
        console.log("Generated key", generatedKey);
    } catch (error) {
        console.error("Error log", error);
    }
}

// ------------------------------------------------------------------------//

module.exports = {
    address,
    customer,
    payment
};