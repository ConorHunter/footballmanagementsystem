import React, { Component } from "react";
import Draggable from "react-draggable";

export default class Tactics extends Component {
    constructor(props) {
      super(props);
      this.state = { tactics: '' };
      }
      myChangeHandler = (event) => {
      this.setState({tactics: event.target.value});
      }
      render() {
        return (
        <div>
          <h3 id="tacticstitle">{this.state.tactics} Team Tactics</h3>
          <div class="form-dropdown">
            <label id="kitcolourlabel">Kit Colour</label>
              <select id="kitcolour" onChange="setPicture();">
                <option value="/images/footballkit.PNG">Red</option>
                <option value="/images/footballkit2.PNG">Blue</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
                <option value="white">White</option>
              </select>
            </div>
            <div class="boxwhite"> </div>
            <div class="form-team">
              <label id="teamnamelabel">Team Name</label>
              <input type="text" class="form-team" placeholder="Enter Team Name" onChange={this.myChangeHandler} />
              </div>
              <img id="footballpitch" src ="conorhunter.github.io/footballmanagementsystem/#/images/footballpitch.PNG"></img>
              <Draggable >
              <div className="player1"><img src ="conorhunter.github.io/footballmanagementsystem/images/footballkit2.PNG"></img><input id ="player1text" type="text" placeholder="Click to edit" class="playerInput" maxlength="50"></input></div>
              </Draggable>
              <Draggable >
              <div className="player2"><img src ="https://conorhunter.github.io/footballmanagementsystem/images/footballkit.PNG"></img><input id ="player2text" type="text" placeholder="Click to edit" class="playerInput" maxlength="50"></input></div>
              </Draggable>
              <Draggable >
              <div className="player3"><img src ="footballmanagementsystem/images/footballkit.PNG"></img><input id ="player3text" type="text" placeholder="Click to edit" class="playerInput" maxlength="50"></input></div>
              </Draggable>
              <Draggable >
              <div className="player4"><img src ="footballmanagementsystem/images/footballkit.PNG"></img><input id ="player4text" type="text" placeholder="Click to edit" class="playerInput" maxlength="50"></input></div>
              </Draggable>
              <Draggable >
              <div className="player5"><img src ="footballmanagementsystem/images/footballkit.PNG"></img><input id ="player5text" type="text" placeholder="Click to edit" class="playerInput" maxlength="50"></input></div>
              </Draggable>
              <Draggable >
              <div className="player6"><img src ="footballmanagementsystem/images/footballkit.PNG"></img><input id ="player6text" type="text" placeholder="Click to edit" class="playerInput" maxlength="50"></input></div>
              </Draggable>
              <Draggable >
              <div className="player7"><img src ="footballmanagementsystem/images/footballkit.PNG"></img><input id ="player7text" type="text" placeholder="Click to edit" class="playerInput" maxlength="50"></input></div>
              </Draggable>
              <Draggable >
              <div className="player8"><img src ="footballmanagementsystem/images/footballkit.PNG"></img><input id ="player8text" type="text" placeholder="Click to edit" class="playerInput" maxlength="50"></input></div>
              </Draggable>
              <Draggable >
              <div className="player9"><img src ="footballmanagementsystem/images/footballkit.PNG"></img><input id ="player9text" type="text" placeholder="Click to edit" class="playerInput" maxlength="50"></input></div>
              </Draggable>
              <Draggable >
              <div className="player10"><img src ="footballmanagementsystem/images/footballkit.PNG"></img><input id ="player10text" type="text" placeholder="Click to edit" class="playerInput" maxlength="50"></input></div>
              </Draggable>
              <Draggable >
              <div className="player11"><img src ="footballmanagementsystem/images/footballkit.PNG"></img><input id ="player11text" type="text" placeholder="Click to edit" class="playerInput" maxlength="50"></input></div>
              </Draggable>
              <div> 
              <label id="teaminstructionslabel">Team Instructions</label>
              <textarea id="teaminstructions" rows="10" cols="50" placeholder="Enter Team Instructions here"></textarea>
              </div>   
            </div>
        );
    }
}
     