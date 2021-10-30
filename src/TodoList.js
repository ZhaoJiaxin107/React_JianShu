import React, { Component } from "react";
import store from "./store";
import { connect } from "react-redux"; // 引入连接器

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    // this.inputChange = this.inputChange.bind(this);
  }
  //   inputChange = (e) => {
  //       console.log(e.target.value);
  //   }
  render() {
    return (
      <div>
        <div>
          <input
            value={this.props.inputValue}
            onChange={this.props.inputChange}
          />
          <button onClick={this.props.clickButton}>提交</button>
        </div>
        <ul>
          {
              this.props.list.map((item, index) => {
                return (<li key={index}>{item}</li>)
              })
          }
        </ul>
      </div>
    );
  }
}

const stateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  };
};

const dispatchToProps = (dispatch) => {
  return {
    inputChange(e) {
      console.log(e.target.value);
      let action = {
          type: 'change_input',
          value: e.target.value
      }
      dispatch(action);
    },
    clickButton() {
        let action = {type: 'add_item'}
        dispatch(action)
        // console.log('hello to do list');
    }
  };
};

export default connect(stateToProps, dispatchToProps)(TodoList);
