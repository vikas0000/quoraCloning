//impoert model/package
const express = require('express');
const router = express.Router();
const homeController = require('../controller/home_controller');

//create the routes
router.get('/',homeController.home);
router.use('/user',require('./users'));
router.use('/post',require('./posts'));
router.use('/comment',require('./comments'));

//export
module.exports = router;