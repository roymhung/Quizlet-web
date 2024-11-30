// class component
// function component

import React from "react";
import DisplayInfor from "./DisplayInfor";
import UserInfor from "./UserInfor";

class MyComponent extends React.Component {
  // jsx
  render() {
    const myInfor = ['a','b','c'];
    return (
      <div>
        <UserInfor />
        <br />
        <br />
        <DisplayInfor name="roy" age="25" />
        <hr/>
        <DisplayInfor name="roylee" age={26} myInfor={myInfor} />
      </div>
    );
  }
}
export default MyComponent;
