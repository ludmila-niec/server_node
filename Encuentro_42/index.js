//PRACTICA 2.a Y 2.b

const fs = require("fs");
let fileName = "unFile.txt";
let existFile = fs.existsSync(fileName);

if (!existFile) {
    fs.writeFileSync(fileName, "");
}
fs.writeFile("./" + fileName, "Soy un texto placeholder", (error) => {
    if (error) {
        console.log(error);
    }
    fs.readFile("./" + fileName, "utf8", (error, data) => {
        if (error) {
            console.log(error);
        } else {
            console.log(data);
            let contenido = data.toUpperCase();
            fs.writeFileSync("./" + fileName, contenido);
        }
    });
});
