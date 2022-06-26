import React, { Component } from "react";

class UpdatingState extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    //this is how you change state of a partiular element
    //this => [setState] method tell react that we are updating the state and
    //then it will fihure out whqt part of the state is changed and based on
    //that it will bring the dom in sync with the virtual dom
    this.setState({ count: this.state.count + 1 });
  };

  /*how react updates using setstate method?
   	 Now that you have seen the complete example of component let's see what exactly happens Under the Hood when we click the increment button at this point we are calling this dad setstate this method is telling react that the state of this component is going to change react will then schedule a call to the render method so that sometimes in the future this call is going to be called we don't know when because it's an asynchronous call and which means that will happen sometimes in the future when the method is going to be called this method as you can see it will return a new react element that element is the Dev that we have on top of this react element with two children a span and a button show our virtual Dom is a tree of three elements are react element on top of two that is Aadesh with two child ok this is how the virtual Dom looks as we have the old virtual react put this side by side and compare them to figure out what elements and virtual Dom are modified in this In this case Dastaan is modified because we have used the counter property so it will reach out to a real browser donon update the corresponding span so it matches our Virtual Drum sonora else in the Dom is updated but only the span element is updated 
*/

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

export default UpdatingState;
