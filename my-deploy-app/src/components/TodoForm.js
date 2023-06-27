// will hold your input field and your Add Todo and Clear Completed buttons.
// Your input field should take in user input, and allow a user to press Enter or click on the Submit Button to add a todo to your list.
// Once a todo is submitted, the Todo List should re-render and show the added todo.
// clear all button

// make this a class component

import React from 'react';


class TodoForm extends React.Component{
    constructor(){
        super();
        this.state = {
            task: ''
        };
    }

    handleChanges = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    };

    submitItem = (e) => {
        e.preventDefault();
        this.setState({ task: '' });
        //addTask prop from App to add the item to the copy of the array of objects with the data that we made (which is what addTask does)
        this.props.addTask(e, this.state.task);
    };


    render() {
        console.log('rendering form!');
        return (
          <form className="form-task" onSubmit={this.submitItem}>
            <input
              type="text"
              value={this.state.task}
              name="task"
              onChange={this.handleChanges}
            />
            <p>
            <button className="add-btn">Add</button>
            </p>
          </form>
        );
    }
}

export default TodoForm;