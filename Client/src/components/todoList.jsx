import React from 'react';
import Task from './task.jsx';

//this will be where we bind and set the state
class TodoList extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			tasks: [{
				id: 0,
				task: 'brush teeth'
			}] //list of tasks 
		};
	}

	render () {
		return (
			<div>
        {this.state.tasks.map((task) => {
        	return <Task />
        })}
			</div>
		);
	}
}

module.exports = TodoList;