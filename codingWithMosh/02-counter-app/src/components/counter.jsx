import React, { Component } from "react";

class Counter extends Component {
  render() {
    console.log(this.props.counter.id);

    return (
      <div>
        {/* {this.props.children} */}
        <h4>{this.props.id}</h4>
        <span style={{ fontSize: 50 }} className={this.getBadgClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgClasses = () => {
    let classes = "badge m-2 badge-";
    return (classes += this.props.value === 0 ? "warning" : "primary");
  };

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
