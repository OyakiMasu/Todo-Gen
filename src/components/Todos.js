import React, { useEffect, useState } from "react";

function Todos(){
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState('');
    
    // List All Todos
    useEffect(() => {
        fetch(' http://localhost:3001/todos')
        .then(response => response.json())
        .then(data => setTodos(data))
        .catch(error => console.error(error))
    }, []);

    // Add A Todo
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

    // Delete A Todo
    const handleDeleteTodo = id => {
        fetch(`http://localhost:3001/todos${id}`, {
          method: 'DELETE'
        })
        .then(() => {
            setTodos(todos.filter(todo => todo.id !== id));
        })
        .catch(error => console.error(error));
    };

    // Update A Todo
    const handleUpdateTodo = (id, updatedTodo) => {
        fetch(`http://localhost:3001/todos/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedTodo)
        })
        .then(response => response.json())
        .then(data => {
            const updatedTodos = todos.map(todo => {
                if(todo.id === data.id){
                    return data;
                }
                    return todo;
            });
            setTodos(updatedTodos);
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
            <li key={todo.id}>{todo.title}
            <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleUpdateTodo(todo.id, { ...todo, completed: !todo.completed })}
          />
        <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
            ))}
        </ul>
        </div>
    )

}

export default Todos;