### Requisitos:
* npm init
* npm install --save sequelize
* npm install --save mysql2
* npm i dotenv


### Enunciado
Dado o modelo de dados de exemplo ofertado pela ORACLE, SAKILA,
disponível em https://dev.mysql.com/doc/sakila/en/sakila-history.html <br>
faça o que se pede:

* **A)** Escolha ao menos 3 entidades que estejam conectadas entre si por algum
tipo de relacionamento (ex. Customer, Rental e Film) e mapeie o
modelo ORM para estas entidades.

* **B)** Disponibilize função para listar cada uma das três entidades: na
listagem não exibir apenas os dados da entidade em si, mas os dados
com agregados de seus relacionamentos.

* **C)** Disponibilize função para inserir novo registro de dado para cada
uma das três entidades. A inserção não deve ser apenas dos dados
“básicos” (flat) da entidade, mas também dos relacionamentos
existentes. Para inserir novo registro o usuário deve informar os
parâmetros de entrada pelo teclado.

Dicas para entrada de dados por teclado:
https://www.codecademy.com/article/getting-user-input-in-node-js