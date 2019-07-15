import React from 'react';
import {connect} from 'react-redux'
import {deleteTask} from '../actions'

function Todo(props) {

  const clickHandler = () => {
    props.toggleComplete(props.item.id)
  }

  const submitHandler = (evt) => {
    evt.preventDefault()
    removeTask(props.item.id)
    console.log(props.item.id)
  }

  const removeTask = (id) => {
    console.log(id)
    const newTaskList = props.todos.filter(task => task.id !== id)
    props.deleteTask(newTaskList)
  }

  return (
    <li className='todo'>
      <p className={`taskItem ${props.item.completed ? 'completed' : ''}`} onClick={clickHandler} >
        {props.item.value}
        <button className='deleteButton' type='button' onClick={submitHandler} >Delete</button>
      </p>
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