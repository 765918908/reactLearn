import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from "../actionTypes"

const defaultState = {
  inputValue: '1',
  list: [
    "任务1",
    "任务2",
    "任务3",
  ]
}

const reducer = (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT) {
    let newState = state
    newState.inputValue = action.value
    return newState
  }
  if (action.type === ADD_ITEM) {
    let newState = state
    if (!newState.inputValue) return
    newState.list.push(newState.inputValue)
    newState.inputValue = ""
    return newState
  }
  if (action.type === DELETE_ITEM) {
    let newState = state
    newState.list.splice(action.index, 1)
    return newState
  }

  return state
}
export default reducer
