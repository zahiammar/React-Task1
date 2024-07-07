import React, { useRef, useContext, useEffect } from 'react';
import { TodoContext } from '../context/TodoContext';
import { useNavigate, useParams } from 'react-router-dom';

const AddTodo = () => {
  const inputRef = useRef();
  const { todos, setTodos } = useContext(TodoContext);
  const navigate = useNavigate();
  const { index } = useParams();
  const isEditing = index !== undefined;

  useEffect(() => {
    if (isEditing) {
      inputRef.current.value = todos[index];
    }
  }, [isEditing, index, todos]);

  const handleSaveTodo = (e) => {
    e.preventDefault();
    const newTodo = inputRef.current.value;

    if (isEditing) {
      const updatedTodos = todos.map((todo, i) => (i === parseInt(index) ? newTodo : todo));
      setTodos(updatedTodos);
    } else {
      setTodos([...todos, newTodo]);
    }

    navigate('/');
  };

  return (
    <div className='componentofList'>
      <h1>{isEditing ? 'Edit Todo' : 'Add Todo'}</h1>
      <form onSubmit={handleSaveTodo}>
        <input type="text" ref={inputRef} />
        <button type="submit"  className='button'>{isEditing ? 'Save' : 'Add'}</button>
      </form>
    </div>
  );
};

export default AddTodo;
