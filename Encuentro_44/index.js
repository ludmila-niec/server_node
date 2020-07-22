let express = require("express");
let server = express();

let alumnos = require("./alumnos");

server.get("/acamica", (req, res) => {
    res.json(alumnos.listaAlumnos());
    res.sendStatus(200);
});

server.get("/acamica/:comision", (req, res) => {
    let comision = req.params.comision;
    let result = alumnos.filtrarComision(comision);
    if (result == 0) {
        res.send("No se encontro la comision");
    }
    res.json(result);
});

server.listen(3000, () => {
    console.log("Servidor Ok puerto 3000");
});
