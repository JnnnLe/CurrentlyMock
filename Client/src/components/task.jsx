import React from 'react';

class Task extends React.Component {
  constructor(props) {
    super(props)
  }

  //onDoubleClickEditTask

  render () {
    return (
      <div>
        <button>Delete</button>
        <p>{this.props.singleTask.task}</p>
        <button>Edit</button>
      </div>
    );
  }
}

module.exports = Task;