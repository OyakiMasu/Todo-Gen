import React, { useEffect, useState } from "react";

function Todos(){
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState('');

    useEffect(() => {
        fetch('http://localhost:8000/todos')
        .then(response => response.json())
        .then(data => setTodos(data))
        .catch(error => console.error(error))
    }, []);

    const handleAddTodo = event => {
        event.preventDefault();
        fetch('http://localhost:8000/todos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ todo })
        })
          .then(response => response.json())
          .then(data => {
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
        </div>
    )

}

export default Todos;