//import the model
const mongoose = require('mongoose');

//create the schema
const UserSchema = new mongoose.Schema({

    Username:{
        type:String,
        required:true
    },
    designation:{
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    
    friends:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Friends'
        }
    ]
},{
    timestamps:true
});

//create model
const User = mongoose.model('User',UserSchema);
//export
module.exports = User;