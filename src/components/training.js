import React, { Component } from "react";
import Form from "./trainingForm.js";
export default class Training extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          training: []
        };
    
        this.addTraining = this.addTraining.bind(this);
        this.deleteTraining = this.deleteTraining.bind(this);
      }
    
      addTraining(date, name, type, place) {
        this.setState(prevState => ({
          training: [...prevState.training, { date, name, type, place }]
        }));
      }
    
      editTraining(date, name, type, place) {
        this.setState(prevState => ({
          training: [...prevState.training, { date, name, type, place }]
        }));
      }
    
      deleteTraining(date) {
        return () => {
          this.setState(prevState => ({
            training: prevState.training.filter(training => training.date !== date)
          }));
        };
      }
    
      render() {
        console.log(this.state);
      

        return (
          <div className="App">
          <nav class="navbar navbar-expand navbar-light fixed-top">
            <div class="container">
              <img className="logo" src ="/images/footballMS.PNG"></img>
              <div class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto">
                </ul>
              </div>
            </div>
            </nav>
            <h3>Training</h3>
            <Form addTraining={this.addTraining} />
            <table id='football' >
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Training Name</th>
                  <th>Training Type</th>
                  <th>Training Place</th>
                </tr>
              </thead>
              <tbody>
                {this.state.training.map((training) => {
                  return (
                    <tr>
                      <td contentEditable="true">{training.date}</td>
                      <td contentEditable="true">{training.name}</td>
                      <td contentEditable="true">{training.type}</td>
                      <td contentEditable="true">{training.place}</td>
                      <td>
                        <button onClick={this.deleteTraining(training.date)}>
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

    