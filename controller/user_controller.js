//import model/package
const bcrypt = require('bcrypt');
const User = require('../models/user');
const fs = require('fs');
const path = require('path');

//create the module signin
module.exports.signin = function(req,res){
    
    //check for authentication
    // if(req.isAuthenticated()){
    //     res.redirect('/');
    // }   
    //render the page
    res.render('signin.ejs',{
        title:"Signin"
    });
}

//create the module signup
module.exports.sign_up = function(req,res){

    //render the page
    res.render('signup.ejs',{
        title:"Signup"
    });
}

//create the module for create user
module.exports.createUser = function(req,res){
    
    //check for authentication
    
        
        //req.body.password = bcrypt.hashSync(req.body.password,10);
        //store the data
        User.create({
            Username:req.body.name,
            email:req.body.email,
            password:req.body.password
            // Username:"vikas",
            // email:"vikasprajapati95@yahoo.com",
            // password:"1234"
        });
        
        res.redirect('/user/sign-in');
}

//create the module for sign out
module.exports.sign_out = function(req,res){
    
    req.logout();
    return res.redirect('/')
}

//create the module for update user
module.exports.update_User = function(req,res){
    
    //check user id with login id
    if(req.user.id!=req.params.id){
        res.redirect('back');
    }
        //find the user by id
        var user = User.findById(req.params.id);
        
            user.Username = req.body.Username;
            user.password = req.body.password;
            user.email = req.body.email;
            user.designation = req.body.designation;
            
            user.save();
            return res.redirect('back');

    }

// create the module for profile
module.exports.userProfile = function(req,res){
    
    res.render('profile_update.ejs',{
        title:"profile"
    })
}