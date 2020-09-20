import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.elements["name"].value;
    const position = form.elements["position"].value;
    const number = form.elements["number"].value;
    const age = form.elements["age"].value;
    this.props.addSquad(name, position, number, age);
    form.reset();
  }

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <input
          id="name"
          type="text"
          defaultValue=""
          placeholder="Name..."
        />
        <input
          id="position"
          type="text"
          defaultValue=""
          placeholder="Position..."
        />
        <input
          id="number"
          type="number"
          defaultValue=""
          placeholder="Number..."
        />
        <input
          id="age"
          type="text"
          placeholder="Age..."
        />
        <input type="submit" value="submit" />
      </form>
    );
  }
}
export default Form;