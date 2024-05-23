const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    apiKey:{
        type:String,
        required:true,
    },
    data:{
        type:Object,
    }
})


module.exports = mongoose.model('Data',dataSchema);