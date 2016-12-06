//setup server here
const Task = require('./taskModel');
const Express = require('express');
const BodyParser = require('body-parser');
const data = require('./data');
const Mongoose = require('mongoose');
const path = require('path');
Mongoose.Promise = Promise;

const app = Express();

//open connection to mongoose db - pending connection
Mongoose.connect('mongodb://localhost/todoList');

//Success, console verified
var db = Mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', (() => console.log('Also, connected to to the database.')));
  
//middleware 
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
app.use(Express.static(path.join(__dirname, '../Client'))); //No need for __DIRNAME
// go into client and serve ALL those files

//start with POST request to create a new todo list
app.post('/api/tasks', ((req, res) => {
  new Task(req.body).save() //saved to db
  .then((task) => { 
  	res.send(task);
  })
  .catch((error) => {
  	res.status(500).send(error);
  });
}));

//GET 
app.get('/api/tasks', ((req, res) => {
  Task.find({}).exec()
  .then((task) => {
  	res.send(task);
  })
  .catch((error) => {
  	res.status(500).send(error);
  });
}));

//PUT 
app.put('/api/tasks/', ((req, res) => {

	//find task and update it's context
  Task.update({_id: req.body.id}, req.body).exec()
  .then((task) => {
  	res.send(task);
  })
  .catch((error) => {
  	res.status(500).send(error);
  });
}));

// //DELETE
app.delete('/api/tasks/:id', ((req, res) => {
	//find task and delete it 
	const id = req.params.id;

	Task.find({_id: id}).remove().exec()
	.then (() => {
		res.status(200).send('Task deleted');
  })
  .catch((error) => {
  	res.status(500).send(error);
  });
}));


app.listen(2425, (() => console.log('Hello world, server listening on port:2425')));