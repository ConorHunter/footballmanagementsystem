import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { HashRouter, Switch, Route, Link } from "react-router-dom";

import Squad from "./components/squad";
import Tactics from "./components/tactics";
import Schedule from "./components/schedule";
import Training from "./components/training";
import Fixture from "./components/fixtures";

function App() {
  return (
    <div class="App">
      <nav class="navbar navbar-expand navbar-light fixed-top">
        <div class="container">
          <Link class="navbar-brand" to={"/squad"}><img className="logo" src ="footballmanagementsystem/images/footballMS.PNG"></img></Link>
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav ml-auto">
            </ul>
          </div>
        </div>
      </nav>
      <nav class="nav"><Link to ="/squad" class="nav__link">
        <i class="material-icons nav__icon">people</i>
        <span class="nav__text">Squad</span></Link>
        <Link to ="/tactics" class="nav__link nav__link">
        <i class="material-icons nav__icon">sports_soccer</i>
        <span class="nav__text">Tactics</span></Link>
        <Link to ="/training" class="nav__link nav__link">
        <i class="material-icons nav__icon">fitness_center</i>
        <span class="nav__text">Training</span></Link>
        <Link to ="fixtures" class="nav__link">
        <i class="material-icons nav__icon">calendar_today</i>
        <span class="nav__text">Fixtures</span></Link>
        <Link to ="schedule" class="nav__link">
        <i class="material-icons nav__icon">event_note</i>
        <span class="nav__text">Schedule</span></Link>
      </nav>
      <HashRouter basename="/">
      <div class="wrapper">
        <div class="inner">
          <Switch>
            <Route exact path='/' component={Squad} />
            <Route path="/squad" component={Squad} />
            <Route path="/tactics" component={Tactics} />
            <Route path="/training" component={Training} />
            <Route path="/fixtures" component={Fixture} />
            <Route path="/schedule" component={Schedule} />      
          </Switch>
        </div>
        </div>
    </HashRouter>
    </div>
  );
}

export default App;
