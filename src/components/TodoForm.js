import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            task: "" 
        };
    }

    handleChanges = e => {
        this.setState({
            task: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTask(this.state.task);
        this.setState({
            task: ""
        });
    };

    render() {
        return (
            <div className = "submission">
            <form onSubmit = {this.handleSubmit}>
                <input onChange = {this.handleChanges} type = "text" name = "task" value = {this.state.task} />
                <br/>
                <button onClick = {this.props.removeCompleted}> Clear Completed</button>
                <button>Add Todo</button>
            </form>
            </div>
        )
    }
}

export default TodoForm;