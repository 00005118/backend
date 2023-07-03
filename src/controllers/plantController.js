const plantSchema = require('../models/plant')

exports.createPlant = (req,res)=>{

    const plant = new plantSchema(req.body)

    plant.save()
    .then((data)=> res.json({msg: "User create Successfully"}))
    .catch((error) => req.json(error))
}


exports.getPlants = (req, res) => {
    plantSchema.find()
    // si todo sale bien mostamos los datos
    .then((data) => res.json(data))
    // si todo sale mal mostamos el error
    .catch((error) => res.json({ message: error }))
}

exports.getPlant = (req,res)=>{
    const {id} = req.params
    
    plantSchema
    .findById(id)
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}))
}

exports.putPlant = (req,res) =>{
    const {id} = req.params
   const {name,wateramount,sunamount,image,description} = req.body
    
   plantSchema
   .updateOne({_id:id}, {$set: {name,wateramount,sunamount,image,description}})
   .then((data)=> res.json({
    msg: "User update Successfully",
  }))
   .catch((error)=> res.json({message: error}))
}

exports.deletePlant = (req,res)=>{
    const {id} = req.params
    
    plantSchema
    .findByIdAndDelete(id)
    .then((data)=> res.json({msg: "Plant delete Successfully"}))
    .catch((error)=> res.json({message: error}))
}