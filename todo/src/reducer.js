import {ADD_TASK} from './actions'

const initialState = {
  todos: []
}

export default function(state= initialState, action) {
  switch (action.type) {
    case ADD_TASK: {
      const { task } = action.payload
      const newTask = state.todos.concat([task])
      return {
        ...state,
        todos: newTask,
      }
    }
    default:
      return state
  }
}