import React, { Component } from 'react';
import BarrelItem from './BarrelItem';
import axios from 'axios';
import '../App.css';

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
  }
  
  render() {
    const barrelItems = this.state.barrels.map((barrel, i) => {
      return (
        <BarrelItem key = { barrel.id } item = { barrel } />
        )
    })
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Barrels</h1>
        </header>
        <ul className = "collection" >
        {barrelItems}
        </ul>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Barrels;
