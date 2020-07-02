//import model/package
const Post = require('../models/post');
const Comment = require('../models/comment');
const nodemailer = require('../mailers/posts');

//create the module for create post
module.exports.create_Post = function(req,res){
    
        //store the data
        var post = Post.create({
            user:req.user,
            content:req.body.post
        });
        
        //check for request
        if(req.xhr){

            nodemailer.newPost(req.user);

            //return the status 
            return res.status(200).send({
                data:{
                    post:post,
                    user:req.user
                },
                message:"post has been published"
            });
        }
        
        res.redirect('back'); 
}

//create the module for single post
module.exports.singlePost = function(req,res){

    //find the post  by id
        var post = Post.findById(req.params.id).populate('user').populate({
            
            path:'comments',
            populate:{
                path:'user',
                populate:{
                    path:'likes'
                }
            }
        });
        
        res.render('single_post.ejs',{
            post
        });
    }

//create the module for delete post 
module.exports.delete_Post = function(req,res){

    //find the post by id
        var post = Post.findById(req.params.id);
        //delete the comments
         Comment.deleteMany({
            post:post.id
        })
        post.delete();
        res.redirect('/');
}