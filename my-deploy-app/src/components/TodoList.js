// receives your Todos array and iterates over the list generating a new <Todo /> for each element in the array.

//functional component so don't need to use 'this.'

import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
    return (
        <div className="todo-list">
            <h3>Todo List:</h3>
            {/* for each todoItem in the todo array (from App), I want to return the Todo component (any code for each item) and pass it some props from here or downfrom the App parent */}
            {props.array.map(todoItem =>(
                <Todo 
                    key={todoItem.id} 
                    todoItem={todoItem}
                    toggleItem={props.toggleItem}
                />
            ))}

            {/* CLEAR ADDED TASK */}
            {/* in App, I passed in the clearTask method to TodoList. use className to edit button in CSS */}
            <button 
                className="clear-btn" 
                onClick={props.clearTask}>
                    Clear Task
            </button>


        </div>
    )
}

export default TodoList;