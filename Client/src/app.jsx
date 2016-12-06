// set up client here 
import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/todoList.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <p>Happy holidays!</p>
        <TodoList />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));