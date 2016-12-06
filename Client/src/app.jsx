// set up client here 
import React from 'react';
import ReactDOM from 'react-dom';
import {TodoList} from './todoList.jsx';

class App extends React.Component {
	render () {
		return (
			<div>
				<p>Hello there, you did it!</p>
				<TodoList />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
