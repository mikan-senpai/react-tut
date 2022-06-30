import { Button } from "bootstrap";
import React, { Component } from "react";
import Counter from "./counter";
// import App from "../App";

class Counters06 extends Component {
  render() {
    const { counters, onReset, onIncrement, onDelete } = this.props;
    return (
      <div>
        <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onIncrement={onIncrement}
            onDelete={onDelete}
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
