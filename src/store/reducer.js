const defaultState = {
  inputValue: '1',
  list: [
    "任务1",
    "任务2",
    "任务3",
  ]
}
const reducer = (state = defaultState, action) => {
  if (action.type === "changeInput") {
    let newState = state
    newState.inputValue = action.value
    return newState
  }
  if (action.type === "addItem") {
    let newState = state
    if (!newState.inputValue) return
    newState.list.push(newState.inputValue)
    newState.inputValue = ""
    return newState
  }
  if (action.type === "deleteItem") {
    let newState = state
    newState.list.splice(action.index, 1)
    return newState
  }

  return state
}
export default reducer
