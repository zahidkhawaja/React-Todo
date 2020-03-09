import React from "react";

class TodoList extends React.Component {
    render() {
        return (
            this.props.tasks.map(item => {
                return <h3>{item.task}</h3>
            }
        )
        )
    }
}

export default TodoList;