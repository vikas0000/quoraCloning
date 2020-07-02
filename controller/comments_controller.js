//import
const Comment = require('../models/comment');
const Post = require('../models/post');

//create the module for create the comments
module.exports.createComment = function(req,res){
   
       var post = Post.findById(req.body.post);
    //store the data
       var comment = Comment.create({
           content:req.body.content,
           user:req.user.id,
           post:post.id
       })
    //push the comments
        post.comments.push(comment);
        post.save();

        //check the request
       if(req.xhr){

        //return the status
           return res.status(200).send({
               data:{
                   comment:comment
               },
               message:"Comment created"
           })
       }
       res.redirect('back');
}

//module for delete the comments
module.exports.deleteComment = function(req,res){
    
        var comment = Comment.findById(req.params.id);
        
        //check the comments id is equal to user id
        if(comment.user._id == req.user.id){
            var postId = comment.post.id;
            
            //find the id and update the comments
            Post.findByIdAndUpdate(postId,{$pull:{comments:req.params.id}});
            comment.remove();
            comment.save();

            console.log("comment delete successfully");
            return res.redirect('back');
        }
        else{
            //otherwise 
            console.log("Not authorize to delete");
            return res.redirect('back');
        }
        
}
