import React from "react";
import Todo from "./Todo";

const TodoList = props => {
        return (
            <div className = "task-list">
            {props.tasks.map(object => (
            <Todo key = {object.id} item = {object} toggleCompleted = {props.toggleCompleted} />
            ))}
            </div>
        )};

export default TodoList;