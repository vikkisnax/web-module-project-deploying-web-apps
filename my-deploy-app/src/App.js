import React from 'react';
// import ReactDom from 'react-dom';

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./components/Todo.css";



const todoArray = [
  {
    task: "Watch Lecture",
    id: 1671036309128,
    completed: false
  },
  {
    task: "Do Assignment",
    id: 1671036354253,
    completed: false
  },
  {
    task: "Plan Groceries",
    id: 1671036377610,
    completed: false
  }
]




class App extends React.Component {
      // like in index.js https://codesandbox.io/s/code-along-solution-y8m61?file=/src/index.js
      // you will need a place to store your state in this component.
      // design `App` to be the parent component of your application.
      // this component is going to take care of state, and any change handlers you need to work with your state
      // App will hold all the data. 
      // It will be the container for your Todo Components.
      // All of your handler functions should live here


    // dealing with TodoForm - pass it in
    addTask = (e, item) => {
        e.preventDefault();
        const newItem = {
          task: item,
          id: Date.now(),
          completed: false
        };
        this.setState({
          todoArray: [...this.state.todoArray, newItem]
        });
      };


  // dealing with TodoList and TD- pass these in to TDL below
  toggleItem = (itemId) => {
    console.log('from TDL to TD toggle:', itemId)
    //toggling the 'completed' field in the object
    // map over array
    // when we find the item we clicked, toggle the purchased field
    // otherwise return the item untouched
    this.setState({
      todoArray: this.state.todoArray.map((tdArrayObj) => {
        if (itemId === tdArrayObj.id) {
          return {
            ...tdArrayObj,
            completed: !tdArrayObj.completed
          };
        }
        return tdArrayObj;
      })
    });
  };

  // clear task(s) you added
  clearTask = (e) => {
    e.preventDefault();
    // if task is completed (if task.completed is true) then filter out
    this.setState({
      todoArray: this.state.todoArray.filter((taskItem) => !taskItem.completed)
    });
  };
  





  constructor() {
    super();
    this.state = {
      todoArray: todoArray
    };
    // console.log(todoArray)
    // console.log(todoArray[0].task)
  }


  render() {
    return (
      <div className="App">
        <div className="header">
          {/* pass in state to TL component then pass into ToDo comp and access task there*/}
          <TodoForm addTask={this.addTask} />
        </div>
        <TodoList 
          array={this.state.todoArray} 
          toggleItem={this.toggleItem}
          clearTask={this.clearTask}
        />
      </div>
    );
  }
}


export default App;
