const express = require("express")//usado para mongo db
const mongoose = require("mongoose")
require("dotenv").config() // usado para variables de ambiente

const userRoutes = require("./routes/user")
const plantRoutes = require("./routes/plant")
const nurseryRoutes = require("./routes/nursery")

const app =  express()
const port = process.env.PORT || 9000  //escuchando puerto 9000

//middleware->sistema de software que ofrece funciones y servicios de nube comunes para las aplicaciones
//en el cual req sera peticion, res nuestra respuesta
//al retornar los datos para visualizarlos nos lo debuelve en formato .json
//los comvertimos a objeto .js
app.use(express.json())
//decimos que todas las rutas tendran este path
app.use('/plantsApi',userRoutes)//userRoute es el el complemento del link que se pasa de userRoute
app.use('/plantsApi',plantRoutes)//plantRoute es el el complemento del link que se pasa de plantRoute
app.use('/plantsApi',nurseryRoutes)
//routes -> definiendo rutas
app.get("/", (req,res)=>{
    res.send("welcome to my API")
})

//console.log(process.env.MONGODB_URI)    
//mongodb conection
mongoose
.connect(process.env.MONGODB_URI)
.then(()=> console.log('connected to mongoDB Atlas')) 
.catch((error)=> console.error(error))

app.listen(port,()=> console.log('server listening on port', port))