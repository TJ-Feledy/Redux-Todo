import {ADD_TASK, TOGGLE_TASK, DELETE_TASK} from './actions'

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
        id: Date.now(),
      }
      const addTask = state.todos.concat([newTask])
      return {
        ...state,
        todos: addTask,
      }
    }
    case TOGGLE_TASK: {
      const {list} = action.payload
      const newList = list
      return {
        ...state,
        todos: newList
      }
    }
    case DELETE_TASK: {
      const {list} = action.payload
      const newList = list
      return {
        ...state,
        todos: newList
      }
    }
    default:
      return state
  }
}