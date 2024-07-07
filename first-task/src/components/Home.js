import React, { useContext, useEffect } from 'react';
import { TodoContext } from '../context/TodoContext';
import { Link } from 'react-router-dom';

const Home = () => {
  const { todos, setTodos } = useContext(TodoContext);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const handleRemoveTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className='componentofList'>
      <h1>Todo List</h1>
      <ul className='List-added'>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleRemoveTodo(index)} className='button'>Remove</button>
            <Link to={`/edit/${index}`}>
              <button className='button'>Edit</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
