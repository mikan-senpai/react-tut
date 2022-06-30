import React, { Component } from "react";

//this componet has no state and no events only we have data coming from props
//so this component is clled
// a stateless component

// this is how you convert into a fuctional component
const Navbar = ({ tolalCounts }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary m-5">
          {tolalCounts}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;

// *******************************************************************************
// *******************************************************************************
//this is class based component
// *******************************************************************************
// class Navbar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <a className="navbar-brand" href="#">
//           Navbar
//           <span className="badge badge-pill badge-secondary m-5">
//             {this.props.tolalCounts}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }

// export default Navbar;
// *******************************************************************************
// *******************************************************************************
