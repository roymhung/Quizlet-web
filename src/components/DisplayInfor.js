import React from "react";
import UserInfor from "./UserInfor";

class DisplayInfor extends React.Component {
  render() {
    //destructuring array/object
    //const listusers = this.props.listUsers;
    const { listUsers } = this.props;
    console.log(listUsers);
    //props => viết tất properties
    return (
      <div>
        { listUsers.map((user,index) => {
            return (
              <div key={user.id}>
                <div>My name's {user.name}</div>
                <div>My age's {user.age}</div>
                <hr />
              </div>
            );
        })}
        {/* <div>My name's {name}</div>
        <div>My age's {age}</div>
        <hr />

        <div>My name's {name}</div>
        <div>My age's {age}</div>
        <hr />

        <div>My name's {name}</div>
        <div>My age's {age}</div> */}
      </div>
    );
  }
}
export default DisplayInfor;
