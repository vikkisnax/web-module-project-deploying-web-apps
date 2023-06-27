// a component that takes in the todo data and displays the task to the screen.
// like item.js 
    // https://codesandbox.io/s/code-along-solution-y8m61?file=/src/components/Item.js

    import React from "react";

    const Todo = props => {
        console.log('props.todoItem:', props.todoItem)
    
        return (
            // toggle each list item in the div ig bc of onClick
            // todoItem is each item/line in the array from the .map in TodoList
            // if the ‘completed’ property in the object is true, then add the string ‘completed’ after ‘item’ so that the className is “item completed”. if it’s false, the className is just ‘item’
            <div
                className={`item ${props.todoItem.completed ? 'completed' : ''}`}
                
                onClick={() => props.toggleItem(props.todoItem.id)}
            >
                
                {/* show task list items */}
                <p>{props.todoItem.task}</p>
    
            </div>
        );
    };
    
    export default Todo;