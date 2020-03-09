import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
    render() {
        return (
            this.props.tasks.map(object => {
                return <Todo item = {object.task} />
            }
        )
        )
    }
}

export default TodoList;