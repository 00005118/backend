const mongoose = require("mongoose")

//creando modelo de datos de usuario
const userSchema = mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    password:{
        type:String,
        require: true
    },
    age:{
        type:Number,
        require: true    
    },
    position:{  
        type:String,
        require: true
    },
    // aqui referenciamos la otra tabla de relacion
    alarms: {
        type: [{ //un tipo de dato personalizado de tipo areglo
            plant_id: { //referenciando de donde viene el id de planta
                //el tipo que ira a traer, un id de la tabla(catalogo) Plant 
                //que se defineen el modelo de plant
                type: mongoose.Schema.Types.ObjectId,
                ref: "Plant"
            }, 
            time: Date,
            group: String,
            water: Number
        }],
        //valor por default
        default: []
    }
})

module.exports = mongoose.model('User', userSchema)