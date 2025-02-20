const mongoose = require('mongoose');


const restSchema = new mongoose.Schema({
    rid:{
        type:String,
        required:true,
        trim : true
    },
    rname:{
        type:String,
        required:true,
        trim : true
    },
    ct:{
        type:String,
        required:true,
        trim : false
    },
    location:{
        type:Number,
        required:true,
        trim : false
    },
    nOfT:{
        type:Number,
        required:true,
        trim : false
    },
    hasOS:{
        type:Boolean,
        required:true,
        trim : false
    },
    ohours:{
        type:String,
        required:true,
        trim : false
    },
    cn:{
        type:String,
        required:true,
        trim : true
    },
})

const Rest = mongoose.model('Rest' , restSchema);

module.exports = Rest;