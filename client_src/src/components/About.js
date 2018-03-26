import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class About extends Component {
  render() {
    return (
      <div className="container">
        <header className="App-header">
          <h2>frontlines of food & liberty</h2>    
        </header>
        <p className="App-intro">
        <a href="https://turtlewolfe.com" title="https://turtlewolfe.herokuapp.com">TurtleWolfe.com</a><br/> 
        <a href="http://loopback.io/doc/en/lb3/index.html" title="http://loopback.io/doc/en/lb3/index.html">LoopBack 3</a><br/> 
        <a href="https://www.npmjs.com/package/create-react-app" title="https://www.npmjs.com/package/create-react-app">Create-React-App</a><br/>
        <img src={logo} className="App-logo" alt="logo" />
        </p>
      </div>
    );
  }
}

export default About;
