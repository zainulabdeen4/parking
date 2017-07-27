import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Toolbar2 from './admintoolbar';
class Admin extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Toolbar2 {...this.props}/>
      </MuiThemeProvider>
    );
  }
}

export default Admin;