//import model
const mongoose = require('mongoose');

//create the schema
const postSchema = new mongoose.Schema({
    
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    content:{
        type:String,
        required:true
    },
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Comment'
    }]
    
},{
    timestamps:true
});

//create the model
const Post = mongoose.model('Post',postSchema);
//export
module.exports = Post