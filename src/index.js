const express = require("express")//usado para mongo db
const mongoose = require("mongoose")

require("dotenv").config() // usado para variables de ambiente

const app =  express()
const port = process.env.PORT || 9000  //escuchando puerto 9000

//routes -> definiendo rutas
app.get("/", (req,res)=>{
    res.send("welcome to my API")
})

//mongodb conection
mongoose
.connect(process.env.MONGODB_URI)
.then(()=> console.log('connected to mongoDB Atlas')) 
.catch((error)=> console.error(error))

app.listen(port,()=> console.log('server listening on port', port))