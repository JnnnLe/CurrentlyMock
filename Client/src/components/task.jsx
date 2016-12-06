import React from 'react';

class Task extends React.Component {
	render () {
		return (
			<div>
			  <button>Delete</button>
			  <p>Task name</p>
			  <button>Edit</button>
			</div>
		);
	}
}

module.exports = Task;