import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class AddBarrel extends Component {

    addBarrel(newBarrel){
        console.log(newBarrel);
        axios.request({
            method:'post',
            url:'http://foood-liberation-front-turtlewolfe.c9users.io:8080/api/Barrels',
            data: newBarrel
        }).then(response => {
            this.props.history.push('/');
        }).catch( err => console.log(err));
    }

    onSubmit(e){
        const newBarrel = {
            name: this.refs.name.value
        }
        this.addBarrel(newBarrel);
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