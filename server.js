//server.js
var express = require('express');
var expobj = express();
var bodyparser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose')
//backendconfiguration file
var db = require('./backendconfiguration/db');
//set port
var port = process.env.PORT || 8080;
//parse application/json
expobj.use(bodyparser.json());
//parse application/vnd.api+json as json
expobj.use(bodyparser.json({type:'applcation/VRDisplayEvent.api+json'}));
//parse aplication/x-www url encoded 
expobj.use(bodyparser.urlencoded({extended:true}));
//method-override
expobj.use(methodOverride('X-HTTP-METHOD-OVERRIDE'));
//set sattic file locations
expobj.use(express.static(__dirname+'/public'));
//configure routes
require('./backendapp/routes')(expobj);
//startup our app
expobj.listen(port);
//infrom to the user
console.log('Node server has been started');
console.log('\nTo check it pen any web browser and type "localhost:'+port+'"');
mongoose.connect(db.url);
//on connection
mongoose.connection.on('connected',function(){
    console.log('connected to database mongoDB @ 27017');
});
mongoose.connection.on('err', function(err){
    if(err){
        console.log('error in database connection:'+err);
    }
});
mongoose.connection.on('disconnected' , function (){
    console.log('disconnected from databasee monngoDB ');
});
process.on('SIGINT', function(){
    console.log('Disconnected from database mongoDB through app termination');
    process.exit(0);
});
exports = module.exports = expobj;

