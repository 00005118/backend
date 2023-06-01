const mongoose = require("mongoose")

const nurserySchema = mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    video:{
        type: String,
        require: true
    },
    description:{
        type:String,
        require: true
    },
    ubication:{
        type:String,
        require: true    
    }
})

module.exports = mongoose.model('Nursery', nurserySchema)