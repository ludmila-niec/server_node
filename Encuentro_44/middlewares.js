let alumnos = require("./alumnos");
let listaAlumnos = alumnos.listaAlumnos();

//middleware que filtra la comision
function checkComision(req, res, next) {
    let comision = req.params.comision;
    let filtro = listaAlumnos.filter((a) => a.comision == comision);
    if (filtro == 0) {
        res.status(404).send("No se encontró la comisión");
    } else {
        req.filtroComision = filtro;
        return next();
    }
}

//POST
//verificar que esten las propiedades
//nombre, apellido, comision
//aca deberia checkear el request body y no los query parameters
function checkPostBody(req, res, next) {
    let data = req.body;
    let nombre = data.nombre;
    let apellido = data.apellido;
    let comision = data.comision;
    if (!nombre) {
        res.status(400).send("Falta el nombre del alumno");
    }
    if (!apellido) {
        res.status(400).send("Falta el apellido del alumno");
    }
    if (!comision) {
        res.status(400).send("Falta la comisión del alumno");
    }

    next();
}

function checkExistingUser(req, res, next) {
    let alumno = req.body;
    let nombre = alumno.nombre;
    let apellido = alumno.apellido;
    let result = listaAlumnos.find(
        (user) => user.nombre == nombre && user.apellido == apellido
    );
    if (!result) {
        res.status(409).send("El alumno ya existe");
    } else {
        return next();
    }
}

module.exports = {
    checkComision: checkComision,
    checkPostBody: checkPostBody,
    checkExistingUser: checkExistingUser,
};
