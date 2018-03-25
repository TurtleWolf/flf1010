import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class EditBarrel extends Component {
    constructor(props){
        super(props);
        this.state = {
            id:'',
            Name:'',
            barrel_number:'',
            date_planted:'',
            size:'',
            contents:'',
            location:'',
            date_last_checked:'',
            notes:''
        }
    }
    
    componentWillMount(){
        this.getBarrelDetails();
    }
    
    editBarrel(newBarrel){
        console.log(newBarrel);
        axios.request({
            method:'post',
            url:'http://foood-liberation-front-turtlewolfe.c9users.io:8080/api/Barrels',
            data: newBarrel
        }).then(response => {
            this.props.history.push('/');
        }).catch( err => console.log(err));
    }
    
    getBarrelDetails(){
    let barrelID = this.props.match.params.id;
    axios.get(`http://foood-liberation-front-turtlewolfe.c9users.io:8080/api/Barrels/${barrelID}`)
    .then (response => {
      this.setState({
            id:response.data.id,
            Name:response.data.Name,
            barrel_number:response.data.barrel_number,
            date_planted:response.data.date_planted,
            size:response.data.size,
            contents:response.data.contents,
            location:response.data.location,
            date_last_checked:response.data.date_last_checked,
            notes:response.data.notes
      }, () =>  {
        console.log(this.state);
      });
    })
    .catch(err => console.log(err));
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
        this.editBarrel(newBarrel);
        e.preventDefault();
    }

    render () {
    return (
            <div className = "container" >
            <br />
            <Link className = "btn grey" to = "/">back</Link>
            <h6>Edit this Barrel</h6>
            <form onSubmit = {this.onSubmit.bind(this)}>
                <div className = "input-field" >
                    <input type = "text" name = "Name" ref = "Name" value = {this.state.Name} />
                    <label htmlFor = "Name" >Name</label>
                </div>
                <div className = "input-field" >
                    <input type = "text" name = "barrel_number" ref = "barrel_number"  value = {this.state.Name} />
                    <label htmlFor = "barrel_number" >barrel number</label>
                </div>
                <div className = "input-field" >
                    <input type = "text" name = "contents" ref = "contents"  value = {this.state.contents} />
                    <label htmlFor = "contents" >contents</label>
                </div>
                <div className = "input-field" >
                    <input type = "date" name = "date_planted" ref = "date_planted" value = {this.state.date_planted}  />
                    <label htmlFor = "date_planted" ></label>
                </div>
                <div className = "input-field" >
                    <input type = "date" name = "date_last_checked" ref = "date_last_checked"  value = {this.state.date_last_checked} />
                    <label htmlFor = "date_last_checked" ></label>
                </div>
                <div className = "input-field" >
                    <input type = "text" name = "location" ref = "location" value = {this.state.location}  />
                    <label htmlFor = "location" >location</label>
                </div>
                <div className = "input-field" >
                    <input type = "text" name = "size" ref = "size"  value = {this.state.size} />
                    <label htmlFor = "size" >size</label>
                </div>
                <div className = "input-field" >
                    <input type = "text" name = "notes" ref = "notes" value = {this.state.notes}  />
                    <label htmlFor = "notes" >notes</label>
                </div>                
                
                <input type = "submit" value = "Save" className = "btn" />
            </form>
            </div>
           )
}
}

export default EditBarrel;