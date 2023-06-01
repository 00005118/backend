const express = require ('express')
const nurserySchema = require('../models/nursery')

//Librerias para crear rutas
const router = express.Router()

router.post('/nursery',(req,res)=>{
    const nursery = new nurserySchema(req.body)

    nursery.save()
    .then((data)=> res.json(data))
    .catch((error) => req.json(error))
})

//CONSULTAR
router.get('/nursery',(req,res)=>{

    nurserySchema
    .find()
    .then((data)=> res.json(data))
    .catch((error) => req.json(error))
})
router.get('/nursery/:id', (req, res) => { 

    const {id} = req.params
    
    nurserySchema
    .findById(id)
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}))
})
//ACTUALIZAR (MODIFICAR) 
router.put('/nursery/:id', (req, res) => { //creando una ruta llamada user
    const {id} = req.params
    const {name,video,description,ubication} = req.body
     
    nurserySchema
    .updateOne({_id:id}, {$set: {name,video,description,ubication}})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}))
 }) 
//ELIMINAR (DELETE) un usuario en ESPECIFICO
router.delete('/nursery/:id', (req, res) => { 
    const {id} = req.params
    
    nurserySchema
    .findByIdAndDelete(id)
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}))
}) 
//ELIMINAR (DELETE) un usuario en ESPECIFICO
router.delete('/nursery/:id', (req, res) => { 
    const {id} = req.params
    
    nurserySchema
    .findByIdAndDelete(id)
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}))
}) 

module.exports = router