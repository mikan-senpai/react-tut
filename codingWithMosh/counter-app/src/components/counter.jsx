import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <React.Fragment>
        <span style={{ fontSize: 50 }} className={this.getBadgClasses()}>
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">increment</button>
      </React.Fragment>
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

export default Counter;
