import React, { Component } from "react";
import "./style.css";

class Input extends Component {
  render() {
    return (
      <input
        type="number"
        value={this.props.val}
        onChange={e => this.props.onChangeValue(e.target.value)}
        disabled={this.props.disabled ? "disabled" : ""}
      ></input>
    );
  }
}

export default Input;
