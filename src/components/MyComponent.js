// class component
// function component

import React from "react";
import DisplayInfor from "./DisplayInfor";
import AddUserInfor from "./AddUserInfor";

class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "roy", age: "15" },
      { id: 2, name: "roylee", age: "20" },
      { id: 3, name: "hung", age: "45" },
    ],
  };

  handleAddNewUser = (userObj) => {
    console.log(">>>> check data from parent: ", userObj);
    // c1(bad code)-use lodash
    //let listUsersClone = [...this.state.listUsers];
    // c1.1(bad code)
    // let listUsersNew =this.state.listUsers;
    // listUsersNew.unshift(userObj);
    // this.setState({
    //   listUsers: listUsersNew
    // })
    // c2
    this.setState({
      listUsers: [userObj, ...this.state.listUsers],
      // listUsers: [...this.state.listUsers, userObj],
    });
  };

  handleDeleteUser = (userId) => {
    //bad code
    let listUsersClone = this.state.listUsers;
    listUsersClone = listUsersClone.filter(item => item.id !== userId);
    this.setState({
      listUsers: listUsersClone
    })
  }
  // jsx
  render() {
    //DRY: don't-repeat youseft
    return (
      <>
        <div className="a">
          <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
          <br />
          <br />
          <DisplayInfor listUsers={this.state.listUsers} 
          handleDeleteUser={this.handleDeleteUser}
          />
        </div>
        <div className="b"> </div>
      </>
    );
  }
}
export default MyComponent;
