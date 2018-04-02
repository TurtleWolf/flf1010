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
 this.handleInputChange = this.handleInputChange.bind(this);
    }
    
    componentWillMount(){
        this.getBarrelDetails();
    }


    getBarrelDetails(){
    let barrelID = this.props.match.params.id;
    axios.get(`/api/Barrels/${barrelID}`)
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
    
    editBarrel(newBarrel){
        //let barrelID = this.props.match.params.id;
        //console.log(newBarrel);
        axios.request({
            method:'put',
            url:`/api/barrels/${this.state.id}`,
            data: newBarrel
        }).then(response => {
            this.props.history.push('/');
        }).catch( err => console.log(err));
    }


    onSubmit(e){
        const newBarrel = {
            //id: this.refs.id.value,
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

    handleInputChange (e){
        //const target = e.target;
        const value = e.target.value;
        const key = e.target.name;
        
        this.setState({
            [key]: value
        });
        
    }


    render () {
    return (
            <div className = "container green lighten-3" >
            <br />
            <Link className = "btn grey" to = "/">back</Link>
            <h6>Edit this Barrel</h6>
            <form onSubmit = {this.onSubmit.bind(this)}>
                <div className = "input-field" >
                    <input type = "text" name = "Name" ref = "Name" value = {this.state.Name} onChange = {this.handleInputChange} />
                    <label htmlFor = "Name" >Name</label>
                </div>
                <div className = "input-field" >
                    <input type = "text" name = "barrel_number" ref = "barrel_number"  value = {this.state.barrel_number} onChange = {this.handleInputChange} />
                    <label htmlFor = "barrel_number" >barrel number</label>
                </div>
                <div className = "input-field" >
                    <input type = "text" name = "contents" ref = "contents"  value = {this.state.contents} onChange = {this.handleInputChange} />
                    <label htmlFor = "contents" >contents</label>
                </div>
                <div className = "input-field" >
                    <input type="text" class="datepicker" name = "date_planted" ref = "date_planted" value = {this.state.date_planted} onChange = {this.handleInputChange} />
                    <label htmlFor = "date_planted" ></label>
                </div>
                <div className = "input-field" >
                    <input type="text" class="datepicker" name = "date_plantod" ref = "date_plantod" value = {this.state.date_planted} onChange = {this.handleInputChange} />
                    <label htmlFor = "date_plantod" ></label>
                </div>                
                <div className = "input-field" >
                    <input type="text" class="datepicker" name = "date_last_checked" ref = "date_last_checked"  value = {this.state.date_last_checked} onChange = {this.handleInputChange} />
                    <label htmlFor = "date_last_checked" ></label>
                </div>
                <div className = "input-field" >
                    <input type = "text" name = "location" ref = "location" value = {this.state.location} onChange = {this.handleInputChange} />
                    <label htmlFor = "location" >location</label>
                </div>
                <div className = "input-field" >
                    <input type = "text" name = "size" ref = "size"  value = {this.state.size} onChange = {this.handleInputChange} />
                    <label htmlFor = "size" >size</label>
                </div>
                <div className = "input-field" >
                    <input type = "text" name = "notes" ref = "notes" value = {this.state.notes} onChange = {this.handleInputChange} />
                    <label htmlFor = "notes" >notes</label>
                </div>                
                
                <input type = "submit" value = "Save" className = "btn" />
            </form>
            </div>
           )
}
}

export default EditBarrel;
