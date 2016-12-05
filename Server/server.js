//setup server here
const Express = require('express');
const BodyParser = require('body-parser');
const data = require('./data');
const Mongoose = require('mongoose')

const app = Express();

//open connection to mongoose db - pending connection
Mongoose.connect('mongodb://localhost/todoList');

//Success, console verified
var db = Mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', (() => console.log('We are connected to to the database.')));

//middleware 
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

////////////// HELPER FNS ////////////////

//TODO: add routes for POST, PUT, DELETE

//start with POST request to create a new todo list
app.post('/api/task', ((req, res) => {
	//push the user input into data.tasks
	data.push(req.body.body); //currently not working
	res.send(data);
}));

//PUT
app.put('/api/task', ((req, res) => {
	//find task and update it's context
}));

//DELETE
app.delete('/api/task', ((req, res) => {
	//find task and delete it 
}));


app.listen(2424, (() => console.log('Hello world, server listening on port:2424')));