//en este archivo creamos las rutas de crear usuario,
//obtener usuarios, eliminar, modificar
const express = require('express')
const userSchema = require("../models/user")
//creando rutas
const router = express.Router()



//creando un EndPoint, quiere decir la ruta final
router.post('/users', (req, res) => { //creando una ruta llamada user
    //usando el modelo para guardar un nuevo usuario
    const user = new userSchema(req.body)
    user.save()
    // si todo sale bien mostamos los datos
    .then((data)=> res.json(data))
    // si todo sale mal mostamos el error 
    .catch((error)=> res.json({message: error}))
}) 


//exportamos la variable route que contine las rutas
module.exports = router