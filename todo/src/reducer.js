import {ADD_TASK, TOGGLE_TASK} from './actions'

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
      const {task} = action.payload
      const id = task.id
      console.log(id)
      const newList = state.todos.map(task => {
        if (task.id === id) {
          task.completed = !task.completed
          return task
        }
        else {
          return task
        }
      })
      return {
        ...state,
        todos: newList
      }
    }
    default:
      return state
  }
}