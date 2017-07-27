import React, { Component } from 'react';
import Toolbar1 from './toolbar';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import Signin from './signin';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import * as firebase from 'firebase';

class locations extends Component {
  constructor(){
    super();
    this.save = this.save.bind(this);
    this.submitted=this.submitted.bind(this);
    this.state={
      location:'',
      slots: ''
    }

  }
  save(e){
   let input1 = {};
   input1[e.target.name] = e.target.value ;
   this.setState(input1);
}
submitted(){
  let arr = [];
        for(let i=0;i<this.state.slots;i++){
            arr.push({
                label: 'Slot'+(i+1)
            })
        }
        firebase.database().ref('Area/'+ this.state.location).set(arr)
}
  render() {
    return (
      <div>
      <div>
          <h1>add locations</h1>

          </div>
          <TextField
      floatingLabelText="location"
      onChange = {this.save}
      value = {this.state.location}
      name = "location"
      type="text"
      />

    <TextField
      hintText="slots"
      floatingLabelText="slots"
      type="number"
      name = "slots"
      value ={this.state.slots}
      onChange = {this.save}
      />
      <br />
      <RaisedButton label="submit"
     primary={true} 
     onClick={this.submitted} 
     />
            </div>
    );
  }
}

export default locations;
