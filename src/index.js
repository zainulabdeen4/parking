import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import * as firebase from 'firebase';
import Signup from './signup.js';
import Admin from './admin';

injectTapEventPlugin();

var config = {
    apiKey: "AIzaSyBrIC_xKI9HS9hXXCduHOm5sO_Z4JmvsZY",
    authDomain: "parking-cdf6d.firebaseapp.com",
    databaseURL: "https://parking-cdf6d.firebaseio.com",
    projectId: "parking-cdf6d",
    storageBucket: "parking-cdf6d.appspot.com",
    messagingSenderId: "838679154796"
  };
  firebase.initializeApp(config);

ReactDOM.render(<BrowserRouter>
    <div>
    <Route exact path='/' component={App} />
    <Route  path='/signup' component={Signup} />
    <Route  path='/admin' component={Admin} />
    </div>
    </BrowserRouter>  ,
 document.getElementById('root'));
registerServiceWorker();
