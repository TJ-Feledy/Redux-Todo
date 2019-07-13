import React from 'react';
import moment from 'moment';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Today's list of important things To Do!</h1>
      <div className='todaysDate'>{moment().format('MMM Do YYYY')}</div>
      <TodoList />
      <AddTodo />
    </div>
  );
}

export default App;