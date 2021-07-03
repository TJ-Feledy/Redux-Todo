import React from 'react'
import Todo from './Todo'
import {connect} from 'react-redux'
import {toggleTask} from '../actions'

function TodoList(props) {

  const toggleComplete = (id) => {
    const newTaskList = props.todos.map(item => {
      if (item.id === id) {
        const newTaskObj = { ...item, completed: !item.completed };
        return newTaskObj;
      }
      else {
        return item;
      }
    })
    props.toggleTask(newTaskList)
  }

  return (
    <div className='list'>
      <ul>
        {props.todos.map((task, index) => {
          return <Todo key={index} toggleComplete={toggleComplete} item={task} />
        })}
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  }
}
const mapDispatchToProps = {
  toggleTask: toggleTask,
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)