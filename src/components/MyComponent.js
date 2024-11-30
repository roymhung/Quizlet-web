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

  }

  handleOnMoverOver(event) {
    // console.log(event.pageX);
  }
  // jsx
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm age {this.state.age}
        <button onMouseOver={this.handleOnMoverOver}>Hover me!</button>
        <button
          onClick={(event) => {
            this.handleClick(event);
          }}
        >
          Click me!
        </button>
      </div>
    );
  }
}
export default MyComponent;