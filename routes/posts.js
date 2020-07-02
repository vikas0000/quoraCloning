//import package/model
const express = require('express');
const router = express.Router();
const postController = require('../controller/posts_controller');

//create the route
router.post('/createPost', postController.create_Post);
router.get('/singlePost/:id',postController.singlePost);
router.get('/deletePost/:id',postController.delete_Post);

//export
module.exports = router;