import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import BarrelItem from
class BarrelItem extends Component {
    
    constructor (props){
        super (props);
        this.state = {
            item : props.item 
        }
    }
    
    render () {
        return (
            <li className = "collection-item">
                <Link to = {`/barrels/${this.state.item.id}`}>
                {this.state.item.Name}</Link>
            </li>
            )
    }
}

export default BarrelItem;