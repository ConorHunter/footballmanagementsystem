import React, { Component } from "react";
import Form from "./squadForm.js";
export default class Squad extends Component { 

    constructor(props) {
        super();
    
        this.state = {
          squad: []
        };
    
        this.addSquad = this.addSquad.bind(this);
        this.deleteSquad = this.deleteSquad.bind(this);
      }
    
      //add squad player function
      addSquad(name, position, number, age) {
        this.setState(prevState => ({
          squad: [...prevState.squad, {name, position, number, age }]
        }));
      }
    
      //delete squad player function
      deleteSquad(name) {
        return () => {
          this.setState(prevState => ({
            squad: prevState.squad.filter(squad => squad.name !== name)
          }));
        };
      }
      
    
      render() {
        console.log(this.state);
        return (
        <div className="App">
          <h3>Squad</h3>
          <Form addSquad={this.addSquad} />
          <table id='football'>
            <thead>
              <tr>
                <th>Player Name</th>
                <th>Player Position</th>
                <th>Squad Number</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {this.state.squad.map((squad) => {
                return (
                  <tr>
                    <td contentEditable="true">{squad.name}</td>
                    <td contentEditable="true">{squad.position}</td>
                    <td contentEditable="true">{squad.number}</td>
                    <td contentEditable="true">{squad.age} </td>
                    <td>
                      <button onClick={this.deleteSquad(squad.name)}>
                        Delete
                      </button>
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

    