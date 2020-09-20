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
    const opposition = form.elements["opposition"].value;
    const type = form.elements["type"].value;
    const scoreline = form.elements["scoreline"].value;
    this.props.addFixture(date, opposition, type, scoreline);
    form.reset();
  }

  render() {
    return (
      // form submit and input form listed below
      <form onSubmit={this.formSubmit}>
        <input
          id="date"
          type="date"
          defaultValue=""
          placeholder="Date..."
        />
        <input
          id="opposition"
          type="text"
          defaultValue=""
          placeholder="Opposition..."
        />
        <input
          id="type"
          type="text"
          defaultValue=""
          placeholder="Type..."
        />
        <input
          id="scoreline"
          type="text"
          defaultValue=""
          placeholder="Scoreline..."
        />
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default Form;