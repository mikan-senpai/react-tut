import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Counters06 from "./components/06-ResolvingSinglePointofTruth-counters";
// import React {} from "react";
import React, { Component } from "react";
// import React, { useState } from "react";

class App extends React.Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleIncrement = (counter) => {
    // console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    // console.log("event Handler Called", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: counters });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          tolalCounts={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters06 />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
