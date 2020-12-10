import React, { Component } from 'react';
import "antd/dist/antd.css"
import store from "./store"
import { changeInputAction, addItemAction, deleteItemAction } from "./actionCreators"
import TodoListUi from "./TodoListUi"

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.stateChange = this.stateChange.bind(this)
    store.subscribe(this.stateChange)
  }
  stateChange () {
    this.setState(store.getState())
  }
  changeInputValue (e) {
    let value = e.target.value
    const action = changeInputAction(value)
    store.dispatch(action)
  }
  addItem () {
    const action = addItemAction()
    store.dispatch(action)
  }
  deleteItem (index) {
    const action = deleteItemAction(index)
    store.dispatch(action)
  }
  render () {
    return (
      <TodoListUi
        list={this.state.list}
        addItem={this.addItem.bind(this)}
        inputValue={this.state.inputValue}
        changeInputValue={this.changeInputValue.bind(this)}
        deleteItem={this.deleteItem.bind(this)}
      />
    );
  }
}

export default TodoList;