import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <div>
  <nav className="green darken-3">
    <div className="nav-wrapper">
      <a href="/" className="brand-logo"><img src={logo} className="App-logo" alt="logo" /></a>
      <a data-activates="main-menu" className="button-collapse show-on-large"><i className="fa fa-bars"></i></a>
      <ul className="right hide-on-small-only">
        <li><Link to ="/"><i className="fa fa-users"></i> Barrels</Link></li>
      </ul>
      <ul className="side-nav" id="main-menu">
<li><Link to ="/"><i className="fa fa-users"></i> Barrels</Link></li>
<li><Link to ="/barrels/add"><i className="fa fa-plus"></i> Add a Barrel</Link></li>
      </ul>
    </div>
  </nav>
      </div>
    );
  }
}

export default NavBar;
