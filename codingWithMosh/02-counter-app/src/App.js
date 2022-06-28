import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Counters06 from "./components/06-ResolvingSinglePointofTruth-counters";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main className="container">
        <Counters06 />
      </main>
    </React.Fragment>
  );
}

export default App;
