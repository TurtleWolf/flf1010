import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
    axios.get(`http://foood-liberation-front-turtlewolfe.c9users.io:8080/api/Barrels/${barrelID}`)
    .then (response => {
      this.setState({details: response.data}, () =>
      {
        console.log(this.state);
      })
    })
    .catch(err => console.log(err));
  }

render () {
    return (
            <div className = "container" >
            <br />
            <Link className = "btn grey" to = "/">back</Link>
            <h3>{this.state.details.Name}</h3>
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
            <button className = "btn red right"><i className ="far fa-trash-alt"></i> Delete this Barrel</button>
            </div>
           )
}
}

export default BarrelDetails;