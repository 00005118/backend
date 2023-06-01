const mongoose = require("mongoose")

const plantSchema = mongoose.Schema({

    name:{
        type: String,
        require: true
    },
    wateramount:{
        type: Number,
        require: true
    },
    sunamount:{
        type: Number,
        require: true
    },
    image: {
        type:String,
        require: true
    },
    description:{
        type: String,
        require: true
    }
})
module.exports = mongoose.model('Plant', plantSchema)