const express = require('express')
const plantSchema = require("../models/plant")
//creando rutas
const router = express.Router()
 
/** 
 * 
 * Ejemplo de una peticion sin usar controladores
 * 
 router.get('/plants',(req, res) => {
    plantSchema.find()
    // si todo sale bien mostamos los datos
    .then((data) => res.json(data))
    // si todo sale mal mostamos el error
    .catch((error) => res.json({ message: error }))
)}
 * 
*/



module.exports = router;