import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import * as firebase from 'firebase';


const style = {
  height: 300,
  width: 400,
  textAlign: 'center',
  display: 'inline-block',
   
};



class Signin extends Component {
  constructor(){
    super();
    this.save = this.save.bind(this);
    this.submitted = this.submitted.bind(this);
    this.state ={
        email: '',
        password: ''
    }
}
submitted(e){
  firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
     var errorCode = error.code;
      var errorMessage = error.message;
      console.log( errorCode + errorMessage);
     
    }).then(()=>{
    var userId = firebase.auth().currentUser.uid;
    const rootRef= firebase.database().ref();
    const userRef = rootRef.child('USER/' + userId);
    userRef.on('value', snapshot => {
      
      if(snapshot.val().type === 'user'){
        //this.props.history.push('/student');
        //this.props.history.push('/student');
        console.log("user");
        
    }
   if(snapshot.val().type === 'admin'){
        this.props.history.push('/admin');
        console.log("admin");
        
    
  }
    else{
      console.log("no user");
      
    }
     

});
         
  });
}
save(e){
   let input1 = {};
   input1[e.target.name] = e.target.value ;
   this.setState(input1);
}

  
  render() {
    return (

    
    <Paper style={style} zDepth={3} rounded={false} id="abc" >
    <TextField
      hintText="email"
      floatingLabelText="email"
      name="email"
      onChange={this.save}

    />
    <TextField
      hintText="password"
      floatingLabelText="password"
      type="password"
      name="password"
      onChange={this.save}
    />
    
    <br />
    <RaisedButton label="sign in" primary={true} 
    onClick={this.submitted} />
    
    </Paper>
    
    );
  }
}

export default Signin;