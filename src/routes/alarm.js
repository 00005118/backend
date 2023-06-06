//////////////////////////////////////////////////////////////
//insertando en catalogo(tabla) con foreignkeys
const express = require('express')
const { find, findById } = require('../models/user')
const userSchema = require("../models/user")
//creando rutas
const router = express.Router()

router.post.find('/alarm/:id', (req, res) => { //creando una ruta llamada user
    //usando el modelo para guardar un nuevo usuario
    const {id}= req.params
    const user = new userSchema(req.body)
    
    const fkuser = userSchema
    .findById(id)
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}))
    
    user.save()
    // si todo sale bien mostamos los datos
    .then((data)=> res.json(data))
    // si todo sale mal mostamos el error 
    .catch((error)=> res.json({message: error}))
}) 

