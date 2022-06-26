import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import Counter from "./components/01-counter";
import ConditionalRendering from "./components/02-ConditionalRendering";
import HandlingEvents from "./components/03-HandlingEvents";
import UpdatingState from "./components/04-UpdatingState";
import PassingEventArguments from "./components/05-PassingEventArguments";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Counter /> */}
    {/* <ConditionalRendering /> */}
    {/* <HandlingEvents /> */}
    {/* <UpdatingState /> */}
    <PassingEventArguments />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
