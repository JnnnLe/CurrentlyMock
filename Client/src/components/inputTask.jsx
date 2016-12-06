import React from 'react';

class InputTask extends React.Component {
  constructor() {
    super()
  	this.input;
    this.handleClick = this.handleClick.bind(this);
  } 

  //append newest task to app
  handleClick () {
  	this.props.addTaskClickEvent(this.input.value);
  }

  render () {
    return (
      <div>
      	<input type='text' ref={(node) => this.input = node} />
      	<button onClick={this.handleClick}> click </button>
      </div>
    );
  }
};

module.exports = InputTask;