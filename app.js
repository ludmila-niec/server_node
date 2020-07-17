//PRIMER LIBRERIA

const operador = require("./calculator");
console.log(operador);

console.log(operador.sumar(50, 33));
console.log(operador.restar(50, 25));
console.log(operador.multiplicar(13, 10));
console.log(operador.dividir(900, 30));

//let suma = operador.sumar(50, 33);
operador.logger(operador.sumar(50, 33));
//let resta = operador.restar(50, 25);
operador.logger(operador.restar(50, 25));
//let multi = operador.multiplicar(13, 10);
operador.logger(operador.multiplicar(13, 10));
//let div = operador.dividir(900, 30);
operador.logger(operador.dividir(900, 30));

operador.logger(operador.sumar(47, 26));
operador.logger(operador.restar(66, 42));
operador.logger(operador.multiplicar(7, 42));
operador.logger(operador.dividir(83, 4));
