const express = require("express");
const app = express();

//agregar body-parser
app.use(express.json());
app.use(logger);

//agregar las siguiente rutas:
//POST /contacto
app.post("/contacto", (req, res) => {
    res.status(200).send("OK!");
});
//GET /demo
app.get("/demo", (req, res) => {
    res.status(200).send("OK!");
});

//agregar middleware que genere log por cada ruta ejecitada.
//{verbo} - {ruta} - {query strings} - {body}

function logger(req, res, next) {
    console.log(req.method);
    console.log(req.url);
    console.log(req.query);
    console.log(req.body);

    next();
}

app.use((err, req, res, next) => {
    if (!err) {
        return next();
    } else {
        console.log("error aca");
        res.status(500).send("Ocurrio un error =(");
    }
});

app.listen(3000, () => {
    console.log("server init");
});
