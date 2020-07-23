const alumnos = [
    {
        id: 1,
        nombre: "Juan",
        apellido: "Gonzalez",
        comision: "dwfs",
    },
    {
        id: 2,
        nombre: "Pedro",
        apellido: "Martinez",
        comision: "dwfs",
    },
    {
        id: 3,
        nombre: "Pedro",
        apellido: "Fernandez",
        comision: "dwfs",
    },
    {
        id: 4,
        nombre: "Esteban",
        apellido: "Moreno",
        comision: "dwa",
    },
    {
        id: 5,
        nombre: "Pedro",
        apellido: "Estevez",
        comision: "dwa",
    },
    {
        id: 6,
        nombre: "Lucas",
        apellido: "Suarez",
        comision: "dwa",
    },
    {
        id: 7,
        nombre: "Esteban",
        apellido: "Andrade",
        comision: "bigdata",
    },
    {
        id: 8,
        nombre: "Sebastian",
        apellido: "Hernandez",
        comision: "bigdata",
    },
    {
        id: 9,
        nombre: "Lucas",
        apellido: "Manso",
        comision: "bigdata",
    },
];

function returnAlumnos() {
    return alumnos;
}

function filtroComision(data) {
    let filtro = alumnos.filter((a) => a.comision == data);
    return filtro;
}

function filtroNombre(lista, q) {
    let filtro = lista.filter((a) => a.nombre == q);
    return filtro;
}

//probar con metodo find. array.find() devuelve el primer match sino undefined
function filtroComisionYid(comision, id) {
    let filtro = alumnos.filter((a) => a.comision == comision && a.id == id);
    return filtro;
}

function eliminarAlumnoById(alumnoFiltrado) {
    let alumno = alumnoFiltrado[0];
    // for (const property in alumno) {
    //     delete property;
    // }
    delete alumno.id
    delete alumno.comision
    delete alumno.nombre
    delete alumno.apellido
    console.log(alumno);
    
    return alumno;
}

module.exports = {
    listaAlumnos: returnAlumnos,
    filtrarComision: filtroComision,
    filtroNombre: filtroNombre,
    filtroComisionYid: filtroComisionYid,
    eliminarAlumnoById: eliminarAlumnoById,
};
