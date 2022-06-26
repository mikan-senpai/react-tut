import React, { Component } from "react";

class HandlingEvents extends Component {
  state = {
    count: 0,
  };

  //   constructor() {
  //     super();
  //     // console.log("constructor", this);
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }
  // you can use the arrow function => as arrow fuctions dont remind the this lkeyword they inherit it
  // }

  //   note => to bind event handlers we use arrow functions

  handleIncrement = () => {
    console.log("Increment clicked", this);
  };

  render() {
    return (
      <div>
        <span style={{ fontSize: 50 }} className={this.getBadgClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          increment
        </button>
      </div>
    );
  }

  getBadgClasses = () => {
    let classes = "badge m-2 badge-";
    return (classes += this.state.count === 0 ? "warning" : "primary");
  };

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default HandlingEvents;
