//import model
const mongoose = require('mongoose');

//create the schema
const friendSchema = new mongoose.Schema({
    fromUser:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    toUser:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
},{
    timestamps:true
});

//create the model
const Friends = mongoose.model('Friends',friendSchema);
//export
module.exports = Friends;