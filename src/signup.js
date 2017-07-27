import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import * as firebase from 'firebase';
import Toolbar1 from './toolbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



const style = {
  height: 300,
  width: 400,
  textAlign: 'center',
  display: 'inline-block',
   
};



class Signup extends Component {

  constructor(){
    super();
    this.save = this.save.bind(this); 
    this.submitted = this.submitted.bind(this);
    this.state={
      username: '',
      password: '',
      email : '',
      type : 'user'
    }
  }
  save(e){
   let input1 = {};
   input1[e.target.name] = e.target.value ;
   this.setState(input1);
}
submitted(e){

   firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode + errorMessage);
    }).then(()=>{
       

     var user = firebase.auth().currentUser;
     
     if(user){
      var uid = firebase.auth().currentUser.uid;
      
      console.log(firebase.auth().currentUser.uid);
      firebase.database().ref('USER/'+ uid).set({
      name:this.state.username,
      Email:this.state.email,
      Pass:this.state.password,
      type:this.state.type

});
     }
     else{
         console.log("user not authenticated");

     }
     firebase.auth().signOut().then(() => {
    }).catch(function(error) {
    console.log(error);
    });
      this.props.history.push('/');
  });

  }
  
  render() {
    return (
        <MuiThemeProvider>
    <div>
    <div>
    <Toolbar1 />
    </div>
        
    
    <Paper style={style} zDepth={3} rounded={false} id="abc" >
    <TextField
      floatingLabelText="user name"
      onChange = {this.save}
      value = {this.state.username}
      name = "username"
      type="text"
      />

    <TextField
      hintText="password"
      floatingLabelText="password"
      type="password"
      name = "password"
      value ={this.state.password}
      onChange = {this.save}
      />

    <TextField
      hintText="email"
      floatingLabelText="email"
      name = "email"
      value ={this.state.email}
        onChange = {this.save}
      />
      <br />


    <RaisedButton label="sign up"
     primary={true} 
     onClick={this.submitted} 
     />
    </Paper>
    </div>
    </ MuiThemeProvider>
    
    );
  }
}

export default Signup;