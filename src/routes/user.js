//en este archivo creamos las rutas de crear usuario,
//obtener usuarios, eliminar, modificar
const express = require('express')
const userSchema = require("../models/user")
//creando rutas
const router = express.Router()


//CREAR
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

//CONSULTAR
//creando un EndPoint, quiere decir la ruta final
router.get('/users', (req, res) => { //creando una ruta llamada user
    
    //usando modelo de usuario
   userSchema
   //usamos la propiedad find para hacer get(consultar)
    .find()
    // si todo sale bien mostamos los datos
    .then((data)=> res.json(data))
    // si todo sale mal mostamos el error 
    .catch((error)=> res.json({message: error}))
}) 

//CONSULTAR un usuario en ESPECIFICO
//creando un EndPoint, quiere decir la ruta final
router.get('/users/:id', (req, res) => { //creando una ruta llamada user y le pasamos un id
    //creamos una variable id que agarrara e valor que le ingresemos,
    // tambien podemos escrivir el nombre o gmail,etc
   const {id} = req.params
    //usando modelo de usuario
    userSchema
    .findById(id)
    // si todo sale bien mostamos los datos
    .then((data)=> res.json(data))
    // si todo sale mal mostamos el error 
    .catch((error)=> res.json({message: error}))
}) 

//ACTUALIZAR (MODIFICAR) 
//creando un EndPoint, quiere decir la ruta final
router.put('/users/:id', (req, res) => { //creando una ruta llamada user
    //usamos la propiedad find para hacer get
   const {id} = req.params
   // agarramoso del cuerpo del mensaje los datos a modificar
   const {name,email,password,age,position} = req.body
    
   //usando modelo de usuario
    userSchema
    //usamos la propiedad updateOne para modificar un registro
    .updateOne({_id:id}, {$set: {name,email,password,age,position}})
    // si todo sale bien mostamos los datos
    .then((data)=> res.json(data))
    // si todo sale mal mostamos el error 
    .catch((error)=> res.json({message: error}))
}) 


//ELIMINAR (DELETE) un usuario en ESPECIFICO
//creando un EndPoint, quiere decir la ruta final
router.delete('/users/:id', (req, res) => { //creando una ruta llamada user y le PASAMOS un id
    //creamos una variable id que agarrara e valor que le ingresemos
   const {id} = req.params
    
   //usando modelo de usuario
   userSchema
    //en este caso busca el id y lo muestra y elimina
    .findByIdAndDelete(id)
    // si todo sale bien mostamos los datos
    .then((data)=> res.json(data))
    // si todo sale mal mostamos el error 
    .catch((error)=> res.json({message: error}))
}) 


//Guardando una planta en un grupo
router.post('/users/:id/alarm', async (req, res) => { //creando una ruta llamada user
    // buscar el usuario por id, parms
    const{id} = req.params
    // construir el objeto alarm a partir de los datos del body
    const{name,email,password,age,position,plant_id,time,group,water} = req.body
    const document = await userSchema.findOne({_id: id})

    if(!document) {
        res.status(404).json({
           message: "Not found" 
        })
    }

    // modificar el usario para agregar la alarmar, agregar un objeto a un arreglo con mongosee
    document.alarms.push({plant_id  ,time,group,water})
    await document.save();

    return res.status(201).json({message: "Alarm registered"})
})
//exportamos la variable route que contine las rutas
module.exports = router
