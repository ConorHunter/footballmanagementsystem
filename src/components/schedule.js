import React, { Component } from "react";
import Form from "./scheduleForm.js";
export default class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schedule: []
    };

    this.addSchedule = this.addSchedule.bind(this);
    this.deleteSchedule = this.deleteSchedule.bind(this);
  }

      addSchedule(date, venue, type, notes) {
        this.setState(prevState => ({
          schedule: [...prevState.schedule, { date, venue, type, notes }]
        }));
      }
    
      deleteSchedule(date) {
        return () => {
          this.setState(prevState => ({
            schedule: prevState.schedule.filter(schedule => schedule.date !== date)
          }));
        };
      }

      render() {
        console.log(this.state);

        return ( 
          <div className="App">
            <h3>Schedule</h3>
            <Form addSchedule={this.addSchedule} />
            <table id='football'>
              <thead>      
                <tr>
                  <th filterkey ="date">Date</th>
                  <th filterkey ="task">Venue</th>
                  <th filterkey ="venue">Task Type</th>
                  <th filterkey ="notes">Additional Notes</th>
                </tr>
              </thead>
              <tbody>
                {this.state.schedule.map((schedule) => {
                  return ( //table data within each row
                    <tr key={schedule.date}> 
                      <td contentEditable="true">{schedule.date}</td>
                      <td contentEditable="true">{schedule.venue}</td>
                      <td contentEditable="true">{schedule.type}</td>
                      <td contentEditable="true">{schedule.notes}</td>
                      <td>
                        <button onClick={this.deleteSchedule(schedule.date)}>
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

    