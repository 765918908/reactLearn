import React, { Component } from 'react';
import "antd/dist/antd.css"
import { Button, Input, List } from 'antd';
class TodoListUi extends Component {

  render () {
    return (
      <div style={{ marginTop: '10px', marginLeft: '10px' }}>
        <div>
          <Input ref={(input) => { this.textInput = input }} value={this.props.inputValue} onChange={this.props.changeInputValue} style={{ width: '200px' }} placeholder="Write Something"></Input>
          <Button onClick={this.props.addItem} type="primary" style={{ marginLeft: '10px' }}>按钮</Button>
        </div>
        <List
          style={{ width: '300px', marginTop: "10px" }}
          bordered
          dataSource={this.props.list}
          renderItem={(item, index) => (<List.Item onClick={() => this.props.deleteItem(index)} >{item}</List.Item>)}
        ></List>
      </div>
    );
  }
}

export default TodoListUi;