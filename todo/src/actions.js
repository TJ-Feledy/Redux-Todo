export const ADD_TASK = 'ADD_TASK'
export const TOGGLE_TASK = 'TOGGLE_TASK'
export const DELETE_TASK = 'DELETE_TASK'

export function addTask(task) {
  return {
    type: ADD_TASK,
    payload: {
      task
    }
  }
}

export function toggleTask(list) {
  return {
    type: TOGGLE_TASK,
    payload: {
      list
    }
  }
}

export function deleteTask(list) {
  return {
    type: DELETE_TASK,
    payload: {
      list
    }
  }
}