import React, { Component } from "react";
import Form from "./fixturesForm.js";
export default class Fixture extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          fixture: [],
        };
    
        this.addFixture = this.addFixture.bind(this);
        this.deleteFixture = this.deleteFixture.bind(this);
      }
    
      //add fixture function
      addFixture(date, opposition, type, scoreline) {
        this.setState(prevState => ({
          fixture: [...prevState.fixture, { date, opposition, type, scoreline }]
        }));
      }
    
      //delete fixture function
      deleteFixture(date) {
        return () => {
          this.setState(prevState => ({
            fixture: prevState.fixture.filter(fixture => fixture.date !== date)
          }));
        };
      }
    
      render() {
        console.log(this.state);
    
        return (
        //general layout of the page
          <div className="App">
            <nav class="navbar navbar-expand navbar-light fixed-top">
            <div class="container">
              <img className="logo" src ="/images/footballMS.PNG"></img>
              <div class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto"></ul>
              </div>
            </div>
            </nav>
            <h3>Fixtures</h3>
            <Form addFixture={this.addFixture} />
            <table id='football'>
              <thead>
                <tr>
                  <th onClick={e => this.onSort(e, 'date')}>Date</th>
                  <th onClick={e => this.onSort(e, 'opposition')}>Opposition</th>
                  <th>Match Type</th>
                  <th>Scoreline</th>
                </tr>
              </thead>
            <tbody>
              {this.state.fixture.map((fixture) => {
                return (
                //table data
                <tr key={fixture.opposition}>
                  <td contentEditable="true">{fixture.date}</td>
                  <td contentEditable="true">{fixture.opposition}</td>
                  <td contentEditable="true">{fixture.type}</td>
                  <td contentEditable="true">{fixture.scoreline}</td>
                  <td>
                    <button onClick={this.deleteFixture(fixture.date)}>Delete</button>
                  </td>
                </tr>
                  );
                })}
             </tbody>
            </table>
          </div>
        );
      }
    }

    