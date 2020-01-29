const mongoose = require('mongoose');
const contacts = new mongoose.Schema({
    first_name:{
        type: String,
        require: true
    },
    last_name:{
        type: String,
        require : true
    },
    contact:{
        type: String,
        require : true
    }

});
module.exports = mongoose.model('contacts',contacts);