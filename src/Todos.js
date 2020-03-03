import React from 'react'

const Todos = ({todos, deleteTodo}) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className = "collection-item-margin" key = {todo.id}>
                    <span className = "test" onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <p className = "center no-left">You have no todos left </p>
    )
    return (
        <div className = "todos collection no-border">
            {todoList}
        </div>
    )
}

export default Todos;