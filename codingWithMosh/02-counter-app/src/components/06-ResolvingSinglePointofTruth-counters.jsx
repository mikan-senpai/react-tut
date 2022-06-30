import { Button } from "bootstrap";
import React, { Component } from "react";
import Counter from "./counter";
// import App from "../App";

class Counters06 extends Component {
  render() {
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.props.onReset}
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onIncrement={this.props.onIncrement}
            onDelete={this.props.onDelete}
            // value={counter.value}
            // id={counter.id}
            counter={counter}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters06;
