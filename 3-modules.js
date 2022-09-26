// CommonJS, Todo arquivo no Node.js é um modulo
// Modulos - Encapsula codigo (somente compartilhe o minimo)
//Este arquivo representa a primeira hora do curso
//Usa os arquivos 4,5,6 e 7

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require ('./7-mind-grenade')

console.log(names)
console.log(sayHi)
console.log (data)

sayHi ('Suzana')
sayHi(names.john)
sayHi(names.peter)
sayHi(data.items[0])
sayHi(data.items[1])
sayHi(data.SinglePerson.name)
