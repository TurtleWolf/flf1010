import React, { Component } from 'react';
//import axios from 'axios';
import { Link } from 'react-router-dom';

class AddBarrel extends Component {

    onSubmit(e){
        console.log(this.refs.name.value);
        e.preventDefault();
    }

    render () {
    return (
            <div className = "container" >
            <br />
            <Link className = "btn grey" to = "/">back</Link>
            <h6>add a Barrel</h6>
            <form onSubmit = {this.onSubmit.bind(this)}>
                <div className = "input-field" >
                    <input type = "text" name = "name" ref = "name" />
                    <label htmlFor = "name" >Name</label>
                </div>
                <input type = "submit" value = "Save" className = "btn" />
            </form>
            </div>
           )
}
}

export default AddBarrel;