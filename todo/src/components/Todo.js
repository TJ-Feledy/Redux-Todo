import React from 'react';

function Todo(props) {

  const clickHandler = () => {
    props.toggleComplete(props.item.id)
  }

  return (
    <li className='todo'>
      <p className={`taskItem ${props.item.completed ? 'completed' : ''}`} onClick={clickHandler} >{props.item.value}</p>
    </li>
  );
};

export default Todo;