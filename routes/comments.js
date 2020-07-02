//import package/model
const express = require('express');
const router = express.Router();
const commentController = require('../controller/comments_controller');

//create the route
router.post('/create-comment',commentController.createComment);
router.get('/delete-comment/:id',commentController.deleteComment);

//export
module.exports = router;