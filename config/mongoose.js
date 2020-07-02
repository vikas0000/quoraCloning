//import model/package
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Quora_api');

//database connection
const dataBase = mongoose.connection;

//for error
dataBase.on('error',console.error.bind(console,'Error in connecting to db'));

dataBase.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = dataBase;