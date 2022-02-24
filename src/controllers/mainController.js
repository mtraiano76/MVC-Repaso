const mainController = {
    renderHome(req,res){
        return res.send("Soy una vista")
    }
}

// el metodo (renderHome ebn este caso) siempre recibe req y res
//Flujo: desde routes paso el req y res al controlador y este va a determinar que va a pasar
//

module.exports = mainController
//aca estamos exportando el controlador para linkear en app