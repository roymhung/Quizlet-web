import React from "react";
import UserInfor from "./UserInfor";

class DisplayInfor extends React.Component {
  render() {
    //destructuring array/object
    const { age, name } = this.props;
    //props => viết tất properties
    return (
      <div>
        <div>My name's {name}</div>
        <div>My age's {age}</div>
      </div>
    );
  }
}
export default DisplayInfor;
