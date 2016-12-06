import React from 'react';
import Task from './task.jsx';
import InputTask from './inputTask.jsx';

//this will be where we bind and set the state
class TodoList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      tasks: [{
        task: 'brush teeth'
      }] //list of tasks 
    };
    this.addTask = this.addTask.bind(this);
  } 

  //TODO: HTTP (get) tasks 

  //add a task
  addTask (task) {
    console.log('this.state: ', this.state);
    this.state.tasks.push({task: task});
    this.setState({
      tasks: this.state.tasks
    })
  }

  render () {
    return (
      <div>
        {this.state.tasks.map((taskItem) => {
          return <Task singleTask={taskItem} />
        })}
        <InputTask addTaskClickEvent={this.addTask}/>
      </div>
    );
  }
};

module.exports = TodoList;