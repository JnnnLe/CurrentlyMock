// set up client here - AJAX HERE?
import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/todoList.jsx';

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			//CmpDidMount? Make req to bd to ...?
		}
	}
  render () {
    return (
      <div>
        <p>Congrats on your first solo project! You should be proud.</p>
        <TodoList />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));