//setup server here
const Express = require('express');
const bodyParser = require('body-parser');
const app = Express();

//middleware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//TODO: add routes for POST, PUT, DELETE

//start with POST request to create a new todo list 


app.listen(2424, (() => console.log('Hello world, server listening on port:2424')));