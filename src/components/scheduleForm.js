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
    const venue = form.elements["venue"].value; 
    const type = form.elements["type"].value;
    const notes = form.elements["notes"].value;
    this.props.addSchedule(date, venue, type, notes);
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
          id="venue"
          type="text"     
          defaultValue=""
          placeholder="Venue..."
        />
        <input
          id="type"
          type="text"
          defaultValue=""
          placeholder="Type..."
        />
        <input
          id="notes"
          type="text"
          defaultValue=""
          placeholder="Notes..."
        />
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default Form;