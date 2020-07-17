//PRIMER LIBRERIA

const fs = require("fs");

let sumar = (num1, num2) => {
    let resultado = num1 + num2;
    return `${num1} + ${num2} = ${resultado}`;
};

let restar = (num1, num2) => {
    let resultado = num1 - num2;
    return `${num1} - ${num2} = ${resultado}`;
};
let multiplicar = (num1, num2) => {
    let resultado = num1 * num2;
    return `${num1} * ${num2} = ${resultado}`;
};
let dividir = (num1, num2) => {
    let resultado = num1 / num2;
    return `${num1} / ${num2} = ${resultado}`;
};

//let sumar = (num1, num2) => num1 + num2;
// let restar = (num1, num2) => num1 - num2;
// let dividir = (num1, num2) => num1 / num2;
// let multiplicar = (num1, num2) => num1 * num2;

let logger = (calculo) => {
    let fileName = "log.txt";
    let existFile = fs.existsSync("./" + fileName);
    if (!existFile) {
        fs.writeFileSync("./" + fileName, "");
    }

    fs.appendFileSync("./" + fileName, "\n" + calculo);

    // fs.readFile("./" + fileName, "utf8", (error, data) => {
    //     if (error) {
    //         console.log(error);
    //     } else {
    //         let texto = data;
    //         texto += "\n" + calculo;
    //         fs.writeFileSync("./" + fileName, texto);
    //     }
    // });
};

module.exports = {
    sumar: sumar,
    restar: restar,
    dividir: dividir,
    multiplicar: multiplicar,
    logger: logger,
};
