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
    }
})

module.exports = mongoose.model('User', userSchema)