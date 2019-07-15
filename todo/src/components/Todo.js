import React from 'react';
import {connect} from 'react-redux'
import {deleteTask} from '../actions'

function Todo(props) {

  const clickHandler = () => {
    props.toggleComplete(props.item.id)
  }

  const submitHandler = (evt) => {
    evt.preventDefault()
    removeTask(evt.target.id)
    console.log(evt.target.id)
  }

  const removeTask = (id) => {
    const newTaskList = props.todos.filter(task => task.id !== id)
    props.deleteTask(newTaskList)
  }

  return (
    <li className='todo'>
      <p className={`taskItem ${props.item.completed ? 'completed' : ''}`} onClick={clickHandler} >{props.item.value}</p>
      <button className='deleteButton' type='button' onClick={submitHandler} >Delete</button>
    </li>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  }
}

const mapDispatchToProps = {
  deleteTask: deleteTask,
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);