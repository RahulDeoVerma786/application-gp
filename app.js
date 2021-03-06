'use strict';


// importing modules
const fs = require('fs');
const https = require('https');
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');

// var index = require('./routes/index');
// var users = require('./routes/users');

// New Code for app and ejs added.
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

// app.use('/', index);
// app.use('/users', users);

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/maintmod2');

//on connection 
mongoose.connection.on('connected',()=>{
	console.log('Connected to database mongodb @ 27017');
});

mongoose.connection.on('error',(err)=>{
	if(err)
	{
		console.log('Error in Database Connection:'+err);
	}
});

//port no
const port = 3000;

//adding middleware
app.use(cors());

//adding body-parser
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname,'public')));

// Open SSl
/*
const httpsOptions = {
	cert: fs.readFileSync(path.join(__dirname, 'ssl', 'server.cert')),
	key: fs.readFileSync(path.join(__dirname, 'ssl', 'server.cert'))
}
*/



//routes
app.use('/api',route);


//testing server
app.get('/',(req, res)=>{
	res.send('foobar');
})



app.listen(port,()=>{
	console.log('Server started at port:'+port);
});
