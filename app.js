const express = require("express"); //creamos proyecto express

const app = express();
const mainController = require ("./src/controllers/mainController") // aca requerimos el controlador que exportamos con moddule.exports(mainController)

app.listen(3000); // levantamos servidor

//app.get("/login", redirecciono a controlador) esto dice que cuando hacemos peticion por GET por ejemplo a LOGIN,
//la app escucha la misma y nos redirecciona al controlador

app.get("/",mainController.renderHome) //aca le pasamos un metodo en particular "renderHome"


//router le pasa peticion GET y le pasa la peticcion al controlador (renderHome)