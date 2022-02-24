# MVC
npm init (inicializamos proyecto)
npm i express (instala express)

Toda peticion empieza en app.js => este se la pasa a routes => este pasa a controlador 
y controlador devuelve una respuesta (req,res)

# Rutas 
routes escucha una peticion hacia una ruta => app.get("/login",redirecciono al controlador (req,res)) peticion get hacia URL (LOGIN)

# Ej ejercicio 1 Playground Rutas parametrizadas
Tenemos una lista de muchas series almacenadas en la variable series. Nuestro trabajo será crear una ruta que apunte a "/series" y las devuelva a TODAS.

app.get("/series",(req,res)=> { /*req dato del petecion, res respuesta cuando finalice todo*/
    return response.send(series) /*retorna respuesta de series*/
})

app.get #routes
(req,res)=> { 
    return response.send(series) #es toda la logica

# Ej ejercicio 2 Playground Rutas parametrizadas
Queremos crear una ruta que apunte a "/serie" y que la misma, a su vez, reciba un número. Ese número representará el id de la serie que estamos queriendo ver. Por lo tanto, la ruta deberá devolver únicamente la serie que coincida con el id que llegó por parámetro.

Un ejemplo de cómo se vería la ruta sería el siguiente: http://localhost/serie/3

app.get("/serie/:id")  /*/: es para ser dinamico, es decir, podemos ir a serie1,serie2,serie3*/
    (req,res)=>{
        const idToFind=req.params.id /*params hace que puda acceder al id que recibo por parametros*/
        const seriesFinded = series.find((serie)=> serie.id == idToFind)  
        /*se resuelve find cuando el id de la serie sea igual al que quiero encontrar*/
            return response.send(serieFinded)
            

    }

    