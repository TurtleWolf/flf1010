import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class AddBarrel extends Component {

    addBarrel(newBarrel){
        console.log(newBarrel);
        axios.request({
            method:'post',
            url:'/api/Barrels',
            data: newBarrel
        }).then(response => {
            this.props.history.push('/');
        }).catch( err => console.log(err));
    }

    onSubmit(e){
        const newBarrel = {
            Name: this.refs.Name.value,
            barrel_number: this.refs.barrel_number.value,
            contents: this.refs.contents.value,
            date_last_checked: this.refs.date_last_checked.value,
            date_planted: this.refs.date_planted.value,
            location: this.refs.location.value,
            size: this.refs.size.value,
            notes: this.refs.notes.value
        }
        this.addBarrel(newBarrel);
        e.preventDefault();
    }

    render () {
    return (
            <div className = "container green lighten-3" >
            <br />
            <Link className = "btn grey" to = "/">back</Link>
            <h6>add a Barrel</h6>
            <form onSubmit = {this.onSubmit.bind(this)}>
                <div className = "input-field" >
                    <input type = "text" name = "Name" ref = "Name" />
                    <label htmlFor = "Name" >Name</label>
                </div>
                <div className = "input-field" >
                    <input type = "text" name = "barrel_number" ref = "barrel_number" />
                    <label htmlFor = "barrel_number" >barrel number</label>
                </div>
                <div className = "input-field" >
                    <input type = "text" name = "contents" ref = "contents" />
                    <label htmlFor = "contents" >contents</label>
                </div>
                <div className = "input-field" >
                    <input type = "date" name = "date_planted" ref = "date_planted" />
                    <label htmlFor = "date_planted" ></label>
                </div>
                <div className = "input-field" >
                    <input type = "date" name = "date_last_checked" ref = "date_last_checked" />
                    <label htmlFor = "date_last_checked" ></label>
                </div>
                <div className = "input-field" >
                    <input type = "text" name = "location" ref = "location" />
                    <label htmlFor = "location" >location</label>
                </div>
                <div className = "input-field" >
                    <input type = "text" name = "size" ref = "size" />
                    <label htmlFor = "size" >size</label>
                </div>
                <div className = "input-field" >
                    <input type = "text" name = "notes" ref = "notes" />
                    <label htmlFor = "notes" >notes</label>
                </div>                
                
                <input type = "submit" value = "Save" className = "btn" />
            </form>
            </div>
           )
}
}

export default AddBarrel;
