//Este arquivo contem uma funcao que sera exportada para ser usada no arquivo 3-modules.js

const sayHi = (name) => {
    console.log(`O seu nome de batismo é ${name}`)
}

//export default
module.exports = sayHi