import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
class BarrelDetails extends Component {
    constructor (props){
       super(props);
       this.state = {
        details: ''
    }
}

componentWillMount(){
    this.getBarrel();    
}

getBarrel(){
    let barrelID = this.props.match.params.id;
    axios.get(`/api/Barrels/${barrelID}`)
    .then (response => {
      this.setState({details: response.data}, () =>
      {
        console.log(this.state);
      })
    })
    .catch(err => console.log(err));
  }

onDelete(){
    let barrelID = this.state.details.id;
    axios.delete(`/api/Barrels/${barrelID}`)
    .then ( response => {
        this.props.history.push('/');
    } ).catch(err => console.log(err));
}

render () {
    return (
        <div className = "container" >

        <header className="App-header">
        <h2>{this.state.details.Name}</h2>
        <Link className = "btn grey" to = "/">back</Link>
        </header>

            <ul className = "collection" >
            <li className = "collection-item" >planted: <b className = "yellow" > {this.state.details.date_planted}</b> </li>
            <li className = "collection-item" >Barrel #: <b className = "yellow" > {this.state.details.barrel_number}</b> </li>
            <li className = "collection-item" ><b className = "yellow" > {this.state.details.contents}</b> </li>
            <li className = "collection-item" >location: <b className = "yellow" > {this.state.details.location}</b> </li>
            <li className = "collection-item" >geolocation: <b className = "yellow" > this.state.details.geoLocaction.toString()</b> </li>
            <li className = "collection-item" >notes: <b className = "yellow" > {this.state.details.notes}</b> </li>
            <li className = "collection-item" >size: <b className = "yellow" > {this.state.details.size}</b> </li>
            <li className = "collection-item" >last checked: <b className = "yellow" > {this.state.details.date_last_checked}</b> </li>
            </ul>
            <Link className = "btn left" to = {`/barrels/edit/${this.state.details.id}`}><i className = "fas fa-pencil-alt" ></i> Edit this Barrel</Link>
            <button onClick = {this.onDelete.bind(this) } className = "btn red right"><i className ="far fa-trash-alt"></i> Delete this Barrel</button>
            
            
                    
        <h1>MODAL</h1>

        
        <a href="#modal1" class="btn waves-effect">Modal 1</a>
        <a href="#modal2" class="btn waves-effect red">Modal 2</a>

        
        <div id="modal1" class="modal">
          <div class="modal-content">
            <h4>Modal Header</h4>
            <p>A bunch of text</p>
          </div>
          <div class="modal-footer">
            <a href="" class="modal-action modal-close waves-effect waves-green">Button</a>
          </div>
        </div>

        <div id="modal2" class="modal">
          <div class="modal-content">
            <h4>Modal 2 Header</h4>
            <p>A bunch of text</p>
          </div>
          <div class="modal-footer">
            <a href="" class="modal-action modal-close waves-effect waves-green">Button</a>
          </div>
        </div>
            
            
            
        <p className="App-intro">
        TurtleWolfe.com<br/>
        using LoopBack & React<br/>
        <img src={logo} className="App-logo" alt="logo" />
        </p>
            
            </div>
           )
}
}

export default BarrelDetails;
