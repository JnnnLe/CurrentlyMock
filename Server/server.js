//setup server here
const Express = require('express');
const BodyParser = require('body-parser');
const data = require('./data');
const Mongoose = require('mongoose');
Mongoose.Promise = Promise;

const app = Express();

//open connection to mongoose db - pending connection
Mongoose.connect('mongodb://localhost/todoList');

//Success, console verified
var db = Mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', (() => console.log('Also, connected to to the database.')));

//creating a task Schema
const taskSchema = new Mongoose.Schema({
	item: String,
});

//options for _id + _v
taskSchema.options.toJSON = {
	transform: (docStoreFrmDB, returnObj) => {
		returnObj.id = returnObj._id;
		delete returnObj._id;
		delete returnObj.__v;
	}
};

//compliling Schema into Model
const Task = Mongoose.model('task', taskSchema);

//middleware 
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

//start with POST request to create a new todo list
app.post('/api/tasks', ((req, res) => {
  new Task(req.body).save() //saved to db
  .then((task) => { 
  	res.send(task)
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
app.put('/api/tasks/:id', ((req, res) => {
	//find task and update it's context
  
}));

//DELETE
app.delete('/api/tasks', ((req, res) => {
	//find task and delete it 
}));


app.listen(2424, (() => console.log('Hello world, server listening on port:2424')));