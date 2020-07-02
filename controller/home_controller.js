//import the package/models
const Post = require('../models/post');
const Friends = require('../models/friend');

//create the module for home
module.exports.home = function (req,res){

    //find the all post
        var posts = Post.find({}).sort({'createdAt':-1}).populate('user').exec();
        var friends = Friends.find();
        var friendsArray=[];

        //check for request
        if(req.user){
            //traverse into the all posts
            for(var friend of friends){
               
                // check the condition 
                if(friend.fromUser!=req.user.id){
                    //store in the array
                    friendsArray.push(friend);
                }
            }
            //find the user posts
            Post.find({user:req.user.id}).populate('user').exec(function(err,userposts){


                //render into the web page
                res.render('home.ejs',{
                    title : 'home',
                    posts: posts,
                    userposts:userposts,
                    friendsArray
                });
            });
            
        }
        else{
            res.render('home.ejs',{
                title : 'home',
                posts: posts,
            });
        }
    }