import React, { Component } from 'react';
import "antd/dist/antd.css"
import { Button, Input, List } from 'antd';
import store from "./store"
import { changeInputAction, addItemAction, deleteItemAction } from "./actionCreators"


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
    this.textInput.focus()
  }
  deleteItem (index) {
    const action = deleteItemAction(index)
    store.dispatch(action)
  }
  render () {
    return (
      <div style={{ marginTop: '10px', marginLeft: '10px' }}>
        <div>
          <Input ref={(input) => { this.textInput = input }} value={this.state.inputValue} onChange={this.changeInputValue.bind(this)} style={{ width: '200px' }} placeholder="Write Something"></Input>
          <Button onClick={this.addItem.bind(this)} type="primary" style={{ marginLeft: '10px' }}>按钮</Button>
        </div>
        <List
          style={{ width: '300px', marginTop: "10px" }}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (<List.Item onClick={this.deleteItem.bind(this, index)} >{item}</List.Item>)}
        ></List>
      </div>
    );
  }
}

export default TodoList;