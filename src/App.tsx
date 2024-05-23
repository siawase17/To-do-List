import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Clock from './components/Timer';

function App() {
  return (
    <div className="container">
      <TodoList />
      <Clock />
    </div>
  );
}

export default App;
