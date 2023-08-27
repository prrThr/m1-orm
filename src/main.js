const prompt = require('prompt-sync')({ sigint: true });
const functions = require('./utils/generalFunctions');

// ---------------------------------------------- //

async function main() {
    let option = 0;

    while (option != 7) {
        option = 0;
        while(option < 1 || option > 7) {
            console.log('1 - Mostrar clientes:');
            console.log('2 - Mostrar endereços:');
            console.log('3 - Mostrar pagamentos:');
            console.log('4 - Inserir cliente:');
            console.log('5 - Inserir endereço:');
            console.log('6 - Inserir pagamento:');
            console.log('7 - Sair');
            option = parseInt(prompt('Selecione uma opção: '));
        }
        
        switch (option) {
            case 1:
                try {
                    await functions.showCustomers();    
                } catch (error) {
                    console.log("Error log: ", error);
                }
                break;
    
            // ------------------------------------------------------- //
    
            case 2:
                try {
                    functions.showAddresses();   
                } catch (error) {
                    
                }
                break;
    
            // ------------------------------------------------------- //
            
            case 3:
                try {
                    await functions.showPayments();    
                } catch (error) {
                    console.log("Error log: ", error);
                }
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
            
            // ------------------------------------------------------- //
            
            default:
                console.log('Default');
        }
    }
}

main();