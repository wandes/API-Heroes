const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Heroes = new Schema({
    publishing_company : {
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    power:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Heroes', Heroes);