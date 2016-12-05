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
db.once('open', (() => console.log('Also, connected to to the database.')));

//creating a task Schema
const taskSchema = Mongoose.Schema({
  item: String
});

//compliling Schema into Model
const Task = Mongoose.model('Task', taskSchema);

//middleware 
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

//start with POST request to create a new todo list
app.post('/api/task', ((req, res) => {
  
}));

//GET 
app.post('/api/task', ((req, res) => {
  
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