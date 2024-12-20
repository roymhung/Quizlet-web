import React, { useState } from "react";

// class AddUserInfor extends React.Component {
//   state = {
//     name: "",
//     address: "Ha Noi",
//     age: '',
//   };

//   handleOnChangeInput = (event) => {
//     this.setState({
//       name: event.target.value,
//     });
//   };

//   handleOnChangeAge = (event) => {
//     // bad code
//     // this.state.age = event.target.value
//     this.setState({
//       age: event.target.value,
//     });
//   };

//   handleOnSubmit = (event) => {
//     event.preventDefault();
//     console.log(this.state);

//     this.props.handleAddNewUser({
//       id: Math.floor((Math.random()*100) + 1) + '-Random',
//       name:this.state.name,
//       age:this.state.age,
//     }
//     );
//   }
//   // jsx
//   render() {
//     return (
//       <div>
//         My name is {this.state.name} and I'm age {this.state.age}
//         <form onSubmit={(event) => this.handleOnSubmit(event)}>
//           <label>Your name: </label>
//           <input
//             value={this.state.name}
//             type="text"
//             onChange={(event) => this.handleOnChangeInput(event)}
//           />

//           <label>Your age: </label>
//           <input
//             value={this.state.age}
//             type="text"
//             onChange={(event) => this.handleOnChangeAge(event)}
//           />
//           <button>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

const AddUserInfor = (props) => {
    // state = {
    //   name: "",
    //   address: "Ha Noi",
    //   age: '',
    // };

    const[name, setName] = useState('');
    const [address, setAddress] = useState("Ha Noi");
    const [age, setAge] = useState("");

    const handleOnChangeInput = (event) => {
      // this.setState({
      //   name: event.target.value,
      // });
      setName(event.target.value)
    };

    const handleOnChangeAge = (event) => {
      // bad code
      // this.state.age = event.target.value
      // this.setState({
      //   age: event.target.value,
      // });
      setAge(event.target.value);
    };

    const handleOnSubmit = (event) => {
      event.preventDefault();
     
      props.handleAddNewUser({
        id: Math.floor((Math.random()*100) + 1) + '-Random',
        name:name,
        age:age,
      }
      );
    }
  return (
    <div>
      My name is {name} and I'm age {age}
      <form onSubmit={(event) => handleOnSubmit(event)}>
        <label>Your name: </label>
        <input
          value={name}
          type="text"
          onChange={(event) => handleOnChangeInput(event)}
        />

        <label>Your age: </label>
        <input
          value={age}
          type="text"
          onChange={(event) => handleOnChangeAge(event)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddUserInfor;
