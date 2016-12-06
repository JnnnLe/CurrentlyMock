const Mongoose = require('mongoose');
Mongoose.Promise = Promise;

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
module.exports = Mongoose.model('task', taskSchema);