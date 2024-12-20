import React, { useEffect, useState } from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";

//stateless vs stateful

const DisplayInfor = (props) => {
  const { listUsers } = props;

  const [isShowHideListUser, setShowHideListUser] = useState(true);
  // this.state = {
  //   isShowHideListUser: true
  // }
  const handleShowHideListUser = () => {
    setShowHideListUser(!isShowHideListUser);
  };

  console.log(">>> call me render");

  useEffect(() => {
    if (listUsers.length === 0) {
      alert("you deleted all the users");
    }
    console.log(">>> call me useEffect");
  }, [listUsers]);

  return (
    <div className="display-infor-container">
      <div>
        <span onClick={() => handleShowHideListUser()}>
          {isShowHideListUser === true ? "Hide list Users" : "Show list Users"}
        </span>
      </div>
      {isShowHideListUser && (
        <>
          {listUsers.map((user, index) => {
            return (
              <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                <div>
                  <div>My name's {user.name}</div>
                  <div>My age's {user.age}</div>
                </div>
                <div>
                  <button onClick={() => props.handleDeleteUser(user.id)}>
                    Delete
                  </button>
                </div>
                <hr />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default DisplayInfor;
