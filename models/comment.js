//import model
const mongoose = require('mongoose');

//create the schema
const commentSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Post'
    }
},{
    timestamps:true
});
//create the model
const Comment = mongoose.model('Comment',commentSchema);
//export 
module.exports = Comment;