import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import Toolbar1 from './toolbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Signin from './signin';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
        <div>
      <Toolbar1 />
      </div>
      <div>
        <Signin {...this.props}/>

        </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
