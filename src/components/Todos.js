import React, { useEffect, useState } from "react";

function Todos(){
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState('');

    useEffect(() => {
        fetch(' http://localhost:3001/todos')
        .then(response => response.json())
        .then(data => setTodos(data))
        .catch(error => console.error(error))
    }, []);

    const handleAddTodo = event => {
        event.preventDefault();
        console.log('Adding todo:', todo);
        fetch(' http://localhost:3001/todos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ 
            title: todo,
            completed: false 
        })
        })
          .then(response => response.json())
          .then(data => {
            console.log('Todo added:', data);
            setTodos([...todos, data]);
            setTodo('');
          })
          .catch(error => console.error(error));
      };

    return (
        <div className="todos">
            <h1>Todo List</h1>

        <form onSubmit={handleAddTodo}>
         <input
          type="text"
          value={todo}
          onChange={event => setTodo(event.target.value)}
        />
        <button>Add</button>
        </form>
        <ul>
            {todos.map(todo => (
            <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
        </div>
    )

}

export default Todos;