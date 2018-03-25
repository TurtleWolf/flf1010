import React from 'react';
import './App.css';
import Main from './components/Main';
import NavBar from './components/Navbar';
import { Link } from 'react-router-dom';
const App = () => (
      <div className="App">
      <NavBar/>
      <Main />
      <div className = "fixed-action-btn">
      <Link to = "/barrels/add" className="btn=floating btn-large red">
            <i className="fa fa-plus"></i>
      </Link>
      </div>
      </div>
    );
  


export default App;
