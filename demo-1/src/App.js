import React, { Component } from 'react';
import './App.css';

// Import our own module
import {feetToMeters} from './Utility';

var App = React.createClass( {
  getInitialState:function() {
    return {value:null}
  },
  changeFeet:function(event) {
    var feet = event.target.value;
    this.setState({value:feet});
  },
  render:function() {
    var meters = feetToMeters(this.state.value);
    return (
      <div className="App">
      <p>A simple way to convert from Feet to meters</p>
      <input onChange={this.changeFeet} placeholder="Input feet.." type="number"/>
      <p>Meters: {meters}</p>
      </div>
    );
  }
});

export default App;
