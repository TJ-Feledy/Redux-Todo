import React from 'react'
import {connect} from 'react-redux'

function TodoList(props) {
  return (
    <div className='list'>
      <ul>
        {props.todos.map((task, index) => {
          return <li key={index}>{task.value}</li>
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