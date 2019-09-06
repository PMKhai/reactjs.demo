import React, { Component } from "react";
import Input from "./../../components/input";
import "./style.css";

class Sum extends Component {
  constructor(props) {
    super(props);
    this.state = { numberOne: 0, numberTwo: 0, resultSum: 0 };
  }

  handleChange = (number, value) => {
    console.log(value);
    let parseValue;
    value === null ? (parseValue = 0) : (parseValue = parseInt(value));

    if (number === "one") {
      this.setState({
        numberOne: parseValue,
        resultSum: parseValue + this.state.numberTwo
      });
    }

    if (number === "two") {
      this.setState({
        numberTwo: parseValue,
        resultSum: this.state.numberOne + parseValue
      });
    }
  };

  render() {
    return (
      <div className="display">
        <Input
          val={this.state.numberOne}
          onChangeValue={value => this.handleChange("one", value)}
          disabled={false}
        />{" "}
        +{" "}
        <Input
          val={this.state.numberTwo}
          onChangeValue={value => this.handleChange("two", value)}
          disabled={false}
        />{" "}
        = <Input val={this.state.resultSum} disabled={true} />
      </div>
    );
  }
}

export default Sum;
