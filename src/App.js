import React from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const tasks = [
  {
    task: "Walk the dog",
    id: 7438473847,
    completed: false
  },
  {
    task: "Buy groceries",
    id: 8328913892,
    completed: false
  }
]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: tasks
    }
  }

  addTask = taskName => {
    const newTask = {
      task: taskName,
      id: new Date(),
      completed: false
    };
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  };

  removeCompleted = () => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if(task.completed === true) {
          return {
            ...task,
            task: ""
          };
        } else {
          return task;
        }
      })
    })

    }
  

  toggleCompleted = clickedTaskId => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === clickedTaskId) {
          return {
            ...task,
            completed: !task.completed
          };
        } else {
          return task;
        }
      })
    });
  };

  render() {
    return (
      <div className = "App">
        <div className = "Content">
        <h2>Welcome to your Todo App!</h2>
        <TodoList tasks = {this.state.tasks} toggleCompleted = {this.toggleCompleted} />
        <TodoForm addTask = {this.addTask} removeCompleted = {this.removeCompleted} />
        </div>
      </div>
    );
  }
}

export default App;
