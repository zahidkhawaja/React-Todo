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
      tasks
    }
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList tasks = {this.state.tasks} />
        <TodoForm />
      </div>
    );
  }
}

export default App;
