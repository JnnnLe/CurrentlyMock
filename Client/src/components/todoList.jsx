import React from 'react';
import Task from './task.jsx';

//this will be where we bind and set the state
class TodoList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      tasks: [{
        task: 'brush teeth'
      }] //list of tasks 
    };
  } 

  //get tasks 
  getTask () {
    
  }

  render () {
    return (
      <div>
        {this.state.tasks.map((taskItem) => {
          return <Task singleTask={taskItem}/>
        })}
      </div>
    );
  }
};



module.exports = TodoList;