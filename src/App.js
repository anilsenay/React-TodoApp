import React, { useState } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

function App() {

  const [todos, setTodo] = useState(
    [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario kart'}
    ]
  );

  const deleteTodo = (id) => {
    const todos1 = todos.filter(todo => {
      return todo.id !== id
    });

    setTodo(todos1)
  }

  const addTodo =  (todo) => {
    todo.id = Math.random();
    let todos2 = [...todos, todo];
    setTodo(todos2);
  }

  return (
    <div className="todo-app container">
      <h1 className = "center blue-text">Todo's</h1>
      <Todos todos = {todos} deleteTodo = {deleteTodo}/>
      <AddTodo addTodo = {addTodo}/>
    </div>
  );
}

export default App;
