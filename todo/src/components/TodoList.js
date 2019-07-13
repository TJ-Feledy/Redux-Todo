import React from 'react'
import {connect} from 'react-redux'

function TodoList() {
  return (
    <div className='list'>
      <ul>
        {props.todos.map((task, index) => {
          <li key={index}>{task}</li>
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

export default connect(mapStateToProps)(TodoList)