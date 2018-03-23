import React, { Component } from 'react';
import axios from 'axios';
import BarrelItem from './BarrelItem';
import '../App.css';
import logo from '../logo.svg';

class Barrels extends Component {
  constructor (){
    super();
    this.state = {
      barrels: []
    }
  }
  
  componentWillMount(){
    this.getBarrels();
  }
  
  getBarrels(){
    axios.get('http://foood-liberation-front-turtlewolfe.c9users.io:8080/api/Barrels')
    .then (response => {
      this.setState({barrels: response.data}, () =>
      {
        console.log(this.state);
      })
    })
    .catch(err => console.log(err));
  }
  
  render() {
    const barrelItems = this.state.barrels.map((barrel, i) => {
      return (
        <BarrelItem key = { barrel.id } item = { barrel } />
        )
    })
    return (
      <div className="container">
        <header className="App-header">
          <h1 className="App-title">Barrels</h1>
        </header>
        <ul className = "collection" >
        {barrelItems}
        </ul>
        <p className="App-intro">
        TurtleWolfe.com<br/>
        using LoopBack & React<br/>
        <img src={logo} className="App-logo" alt="logo" />
        </p>
      </div>
    );
  }
}

export default Barrels;
