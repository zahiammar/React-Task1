import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import AddTodo from './components/AddTodo';
import { TodoProvider } from './context/TodoContext';
import './App.css';


const App = () => {
  
  return (
    <TodoProvider>
      <Router>
        <nav className='List'>
          <ul>
            <li>
              <Link to="/" className='Link'>Home</Link>
            </li>
            <li>
              <Link to="/add" className='Link'>Add Todo</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddTodo />} />
          <Route path="/edit/:index" element={<AddTodo />} />
        </Routes>
      </Router>
    </TodoProvider>
  );
};

export default App;
