const mongoose = require('mongoose');

const BusinessSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    category:{
        type:String,
        required:true
    },
    
    joined:{
        type:Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Businesses', BusinessSchema)