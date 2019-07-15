import {ADD_TASK} from './actions'

const initialState = {
  todos: []
}

export default function(state= initialState, action) {
  switch (action.type) {
    case ADD_TASK: {
      const { task } = action.payload
      const newTask = {
        value: task,
        completed: false,
      }
      const addTask = state.todos.concat([newTask])
      return {
        ...state,
        todos: addTask,
      }
    }
    default:
      return state
  }
}