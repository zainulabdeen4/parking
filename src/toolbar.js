import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
//import './toolbar.css';
import {Link} from 'react-router-dom';

class Toolbar1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 3,
    };
  }
  

  handleChange = (event, index, value) => this.setState({value});
 

  render() {
    return (
      <Toolbar>
        <span id="titl">parking reservations system</span>
        <ToolbarGroup>
          
          <Link to="/">
          <RaisedButton label="sign in" primary={true}/> </Link> 
          &nbsp;  
          
          <Link to="/signup">
          <RaisedButton label="sing up" primary={true}/> </Link> 
      
                             
        </ToolbarGroup>
      
      </Toolbar>
    );
  }
} 

export default Toolbar1;