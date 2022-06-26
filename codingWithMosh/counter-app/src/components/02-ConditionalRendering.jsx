import React, { Component } from "react";

class ConditionalRendering extends Component {
  state = {
    count: 0,
    tags: [],
  };
  rendertags = () => {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  };

  render() {
    return (
      <div>
        {/* this is known as conditional rendering */}
        {this.rendertags()}
        {/* if you have a single if statement without the else part this is the below code */}
        {this.state.tags.length === 0 && "please create a new tag!!!"}
      </div>
    );
  }
}

export default ConditionalRendering;
