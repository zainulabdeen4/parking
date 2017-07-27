import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
//import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
//import './toolbar.css';
import * as firebase from 'firebase';
import DrawerAdmin from './drawer'
import { BrowserRouter, Route , Link } from 'react-router-dom';
import Locations from './addlocations';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import ViewLocations from './viewlocations';

class Toolbar2 extends Component {
     constructor(props) {
    super(props);
    this.state = {open: false};
  }
  
  
submitted(){
   firebase.auth().signOut().then(() => {
  this.props.history.push('/');    

}).catch(function(error) {
  console.log(error);
});
}

   handleToggle = () => this.setState({open: !this.state.open});
 

  render() {
    return (
        <BrowserRouter>
        <div>
    <AppBar
    title="Title"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    onTouchTap={this.handleToggle}
    >
    <Drawer open={this.state.open}>
          <MenuItem onTouchTap={this.handleToggle}>close</MenuItem>
          <Link to="/admin/locations"><MenuItem >add locations</MenuItem></Link>
          <Link to="/viewlocations"><MenuItem >add locations</MenuItem></Link>
        </Drawer>
    </AppBar>

    <div className="side">
        <Route  path="/admin/locations" component={Locations}/>
         <Route  path="/viewlocations" component={ViewLocations}/>
    </div>
    </div>
    </BrowserRouter>

           );
  }
} 

export default Toolbar2;