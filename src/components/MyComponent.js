// class component
// function component

import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "roylee",
    address: "Ha Noi",
    age: 25,
  };

  handleClick = (event) => {
    console.log(">>> click me");

    //merge State => react class
    this.setState({
      name: "roy",
      age: Math.floor(Math.random() * 100 + 1),
    });
  };

  handleOnMoverOver(event) {
    // console.log(event.pageX);
  }

  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
  };
  // jsx
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm age {this.state.age}
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            onChange={(event) => this.handleOnChangeInput(event)}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default MyComponent;
