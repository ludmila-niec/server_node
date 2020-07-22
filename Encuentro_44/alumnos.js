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

function returnAlumnos(){
    return alumnos
}

function returnComision(data){
    let filtro = alumnos.filter(a => a.comision == data)
    return filtro
}

module.exports = { listaAlumnos: returnAlumnos, filtrarComision: returnComision  };
