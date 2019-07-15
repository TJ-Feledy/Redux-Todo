import React from 'react'
import {connect} from 'react-redux'
import {toggleTask} from '../actions'

function TodoList(props) {
  return (
    <div className='list'>
      <ul>
        {props.todos.map((task, index) => {
          return <li key={index} onClick={props.toggleTask} >{task.value}</li>
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