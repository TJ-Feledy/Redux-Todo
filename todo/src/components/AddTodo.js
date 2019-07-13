import React from 'react'
import {connect} from 'react-redux'
import {addTask} from '../actions'

class AddTodo extends React.Component {
  constructor() {
    super()
    this.state = {
      todo: ''
    }
  }

  handleChange = (evt) => {
    evt.preventDefault()

    this.setState({
      [evt.target.name]: evt.target.value,
    })
  }

  addTodo = (evt) => {
    evt.preventDefault()

    this.props.addTask(this.state.todo)

    this.setState({
      todo: ''
    })
  }

  render() {
    const {todo} = this.state
  
    return (
      <form className='addForm' onSubmit={this.addTodo}>
        <input type='text'
          name='todo' 
          placeholder='Today I need to...' 
          value={todo} onChange={this.handleChange} 
          required 
        />
        <button type='submit'>Add</button>
      </form>
    )
  }
}

const mapDispatchToProps = {
  addTask: addTask,
}

export default connect(mapDispatchToProps)(AddTodo)