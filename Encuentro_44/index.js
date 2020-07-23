let express = require("express");
let server = express();

let alumnos = require("./alumnos");

server.get("/acamica", (req, res) => {
    res.status(200);
    res.json(alumnos.listaAlumnos());
});

// server.get("/acamica/:comision", (req, res) => {
//     let comision = req.params.comision;
//     let result = alumnos.filtrarComision(comision);
//     if (result == 0) {
//         res.send("No se encontro la comision");
//     }
//     res.json(result);
// });

//GET alumnos por comision. + filtrar por nombre
server.get("/acamica/:comision/alumnos", (req, res) => {
    let comision = req.params.comision;
    let qNombre = req.query.nombre;
    let comisionFiltrada = alumnos.filtrarComision(comision);
    //checkeo si no hay coincidencias del filtrado de comision
    if (comisionFiltrada == 0) {
        res.status(404);
        res.send("No se encontro la comision");
    } else if (qNombre != undefined) {
        //ahora checkeo si tengo queryString
        let nombrefiltrado = alumnos.filtroNombre(comisionFiltrada, qNombre);
        //checkeo si no hay coincidencia con el querystring
        if (nombrefiltrado == 0) {
            res.status(404);
            res.send("No se encontro el alumno");
        } else {
            //coincidencia con comision y nombre. retorno resultado final
            res.status(200);
            res.json(nombrefiltrado);
        }
    } else {
        //retorno solo la comision. No se solicitó filtro querystring
        res.status(200);
        res.json(comisionFiltrada);
    }
});

//GET alumnos por comision y id
server.get("/acamica/:comision/alumnos/:id", (req, res) => {
    let comision = req.params.comision;
    let id = req.params.id;
    //quizas primero deberia checkear el parametro comision y despues filtrar por id
    let filtrado = alumnos.filtroComisionYid(comision, id);
    if (filtrado == 0) {
        res.status(404);
        res.send("No se encontro la comision o alumno");
    } else {
        res.json(filtrado);
    }
});

//DELETE Alumnos por comision por id
server.delete("/acamica/:comision/alumnos/:id", (req, res) => {
    let comision = req.params.comision;
    let id = req.params.id;
    //quizas primero deberia checkear el parametro comision y despues filtrar por id
    //separar las funciones filtrar comision y filtrar id
    let filtrado = alumnos.filtroComisionYid(comision, id);
    if (filtrado == 0) {
        res.status(404);
        res.send("No se encontro la comision o alumno");
    }
    let result = alumnos.eliminarAlumnoById(filtrado);
    res.send(result);
});

server.listen(3000, () => {
    console.log("Servidor Ok puerto 3000");
});
