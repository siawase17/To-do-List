import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Timer from './components/Timer';

function App() {
  return (
    <div className="container">
      <TodoList />
      <Timer />
    </div>
  );
}

export default App;
