//import package/model
const express = require('express');
const router = express.Router();
const userController = require('../controller/user_controller');

//create the route
router.get('/sign-up',userController.sign_up);
router.get('/sign-in',userController.signin);
router.get('/sign-out',userController.sign_out);
router.post('/create-user',userController.createUser);

router.get('/profile',userController.userProfile);
router.post('/update-user/:id',userController.update_User);

//export
module.exports = router;