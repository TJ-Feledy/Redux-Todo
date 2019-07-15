import React from 'react'
import { connect } from 'react-redux'
import { toggleTask } from '../actions'

class ToggleTodo extends React.Component {
  constructor() {
    super()
    this.state = {
      list: [],
      task: '',
      id: '',
      completed: false,
    }
  }

  handleChange = (evt) => {
    evt.preventDefault()

    this.setState({
      [evt.target.name]: evt.target.value,
    })
  }

  toggleComplete = (evt) => {
    evt.preventDefault()
    const id = evt.target.id

  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  }
}

const mapDispatchToProps = {
  addTask: addTask
}