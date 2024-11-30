// class component
// function component

import React from "react";
import DisplayInfor from "./DisplayInfor";
import UserInfor from "./UserInfor";

class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "roy", age: "15" },
      { id: 2, name: "roylee", age: "20" },
      { id: 3, name: "hung", age: "45" },
    ],
  };

  // jsx
  render() {
    //DRY: don't-repeat youseft
    return (
      <div>
        <UserInfor />
        <br />
        <br />
        <DisplayInfor listUsers={this.state.listUsers}/>
      </div>
    );
  }
}
export default MyComponent;
