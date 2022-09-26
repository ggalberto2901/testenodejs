//Uso do Npm
// Para vc criar um package vc precisa criar um arquivo chamado package.json
// Para isto vc deve executar o comando npm init ou npm init -y

//Apos isto vc pode instalar pacotes externos que fica no site npmjs.com.
// Existe um pacote chamado bootstrap e um outro chamado lodash que usaremos para criar as depencias 

//Para instalar local usar o comando npm i <packageName>

//Para instalar como dependencia global usar o comando npm install -g <packageName>

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]

const Newitems = _.flattenDeep(items)

console.log(Newitems)