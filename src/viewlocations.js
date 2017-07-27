import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import * as firebase from 'firebase';

class ViewLocations extends Component {
    constructor(){
        super();
        this.state={
        area : {}
        }

    }
    componentDidMount(){
        const rootRef = firebase.database().ref().child('Area/');
        rootRef.on('value',snap =>{
            this.setState({
                    area:snap.val()
            })
         })
         debugger;

    }
  render() {
      let areas = '';

            if(this.state.area!=null)
            {

            areas = Object.keys(this.state.area).map((key)=>{
                debugger;
                return(  
                    <ListItem>
                        </ListItem>
                )

                
            })
            }
    return (
        <h1></h1>
      
    );
  }
}

export default ViewLocations;
