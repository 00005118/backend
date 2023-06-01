const express = require('express')
const plantSchema = require("../models/plant")
//creando rutas
const router = express.Router()
 
//CREAR
router.post('/plants',(req,res)=>{

    const plant = new plantSchema(req.body)

    plant.save()
    .then((data)=> res.json(data))
    .catch((error) => req.json(error))
})

//CONSULTAR
router.get('/plants',(req,res)=>{

    plantSchema
    .find()
    .then((data)=> res.json(data))
    .catch((error) => req.json(error))
})

//CONSULTAR un usuario en ESPECIFICO
router.get('/plants/:id', (req, res) => { 

    const {id} = req.params
    
    plantSchema
    .findById(id)
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}))
}) 

//ACTUALIZAR (MODIFICAR) 
router.put('/plants/:id', (req, res) => { //creando una ruta llamada user
   const {id} = req.params
   const {name,wateramount,sunamount,image,description} = req.body
    
   plantSchema
   .updateOne({_id:id}, {$set: {name,wateramount,sunamount,image,description}})
   .then((data)=> res.json(data))
   .catch((error)=> res.json({message: error}))
}) 
//ELIMINAR (DELETE) un usuario en ESPECIFICO
router.delete('/plants/:id', (req, res) => { 
    const {id} = req.params
    
   userSchema
    .findByIdAndDelete(id)
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}))
}) 


module.exports = router;