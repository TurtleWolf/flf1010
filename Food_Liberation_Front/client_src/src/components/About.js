import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class About extends Component {
  render() {
    return (
      <div className="container">
        <header className="App-header">
          <h1 className="App-title">frontlines of food & liberty</h1>
        </header>
        <p className="App-intro">
        TurtleWolfe.com<br/>
        using LoopBack & React<br/>
        <img src={logo} className="App-logo" alt="logo" />
        </p>
      </div>
    );
  }
}

export default About;
