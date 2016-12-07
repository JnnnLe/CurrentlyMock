import React from 'react';
import $ from 'jquery';
import Task from './task.jsx';
import InputTask from './inputTask.jsx';

//this will be where we bind and set the state
class TodoList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      tasks: [
        { task: 'brush teeth'}, 
        { task: 'do laundry'}
      ] //list of tasks 
    };
    this.addTask = this.addTask.bind(this);
  } 

  //TODO: HTTP (get) tasks 

  getTasksUponLoading () {

    $.ajax({
        method: 'GET',
        url: '/api/tasks',
        success: (data) => {
          const arrayOfTasks = data.map((task) => {task: task.item});
          this.setState({tasks: arrayOfTasks});
        }
     });
  }

  componentWillMount() {
    this.getTasksUponLoading();
    // this.getTasksUponLoading.call(this);
  }

  //add a task
  addTask (task) {
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