let express = require("express");
let server = express();

let alumnos = require("./alumnos");
let middleware = require("./middlewares");
const {
    checkComision,
    checkPostBody,
    checkExistingUser,
} = require("./middlewares");

server.use(express.json()); //body parser

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

//GET alumnos por comision. + filtrar por nombre (opcional)
// server.get(
//     "/acamica/:comision/alumnos",
//     middleware.checkParamComision,
//     (req, res) => {
//         let comision = req.params.comision;
//         let qNombre = req.query.nombre;
//         //let comisionFiltrada = alumnos.filtrarComision(comision);
//         //checkeo si no hay coincidencias del filtrado de comision
//         if (comisionFiltrada == 0) {
//             res.status(404);
//             res.send("No se encontro la comision");
//         } else if (qNombre != undefined) {
//             //ahora checkeo si tengo queryString
//             let nombrefiltrado = alumnos.filtroNombre(
//                 comisionFiltrada,
//                 qNombre
//             );
//             //checkeo si no hay coincidencia con el querystring
//             if (nombrefiltrado == 0) {
//                 res.status(404);
//                 res.send("No se encontro el alumno");
//             } else {
//                 //coincidencia con comision y nombre. retorno resultado final
//                 res.status(200);
//                 res.json(nombrefiltrado);
//             }
//         } else {
//             //retorno solo la comision. No se solicitó filtro querystring
//             res.status(200);
//             res.json(comisionFiltrada);
//         }
//     }
// );
server.get(
    "/acamica/:comision/alumnos",
    middleware.checkComision,
    (req, res) => {
        let comision = req.params.comision;
        let qNombre = req.query.nombre;
        if (qNombre != undefined) {
            //ahora checkeo si tengo queryString
            let nombrefiltrado = alumnos.filtroNombre(
                req.filtroComision,
                qNombre
            );
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
            res.json(req.filtroComision);
        }
    }
);

//GET alumnos por comision y id
server.get("/acamica/:comision/alumnos/:id", checkComision, (req, res) => {
    let comision = req.params.comision;
    let id = req.params.id;
    let filtrado = alumnos.filtroComisionYid(comision, id);
    if (!filtrado) {
        res.status(404);
        res.send("No se encontró el alumno");
    } else {
        res.json(filtrado);
    }
});

// DELETE Alumnos por comision y id
server.delete("/acamica/:comision/alumnos/:id", checkComision, (req, res) => {
    let comision = req.params.comision;
    let id = req.params.id;
    let filtrado = alumnos.filtroComisionYid(comision, id);
    if (!filtrado) {
        res.status(404);
        res.send("No se encontró el alumno");
    } else {
        let result = alumnos.eliminarAlumnoById(filtrado);
        res.status(200).send({ success: "true", Message: "Alumno eliminado" });
    }
});

//POST
//verificar que esten las propiedades
//nombre, apellido, comision

server.post(
    "/acamica/nuevoalumno",
    checkPostBody,
    checkExistingUser,
    (req, res) => {
        let data = req.body;
        console.log(data);
        let result = alumnos.altaAlumno(data);
        res.status(201).json(result);
    }
);

server.use((err, req, res, next) => {
    if (!err) {
        return next();
    } else {
        res.status(500).send("Ocurrio un Error =(");
    }
});

server.listen(3000, () => {
    console.log("Servidor Ok puerto 3000");
});
