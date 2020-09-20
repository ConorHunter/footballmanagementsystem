import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const date = form.elements["date"].value;
    const name = form.elements["name"].value;
    const type = form.elements["type"].value;
    const place = form.elements["place"].value;
    this.props.addTraining(date, name, type, place); 
    form.reset();
  }

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <input
          id="date"
          type="date"
          defaultValue=""
          placeholder="Date..."
        />
        <input
          id="name"
          type="text"
          defaultValue=""
          placeholder="Name..."
        />
        <input
          id="type"
          type="text"
          defaultValue=""
          placeholder="Type..."
        />
        <input
          id="place"
          type="text"
          defaultValue=""
          placeholder="Place..."
        />
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default Form;