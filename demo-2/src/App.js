import React, { Component } from 'react';
import './App.css';
import Circle from './Circle';
import _ from "underscore";

var App = React.createClass( {
    getInitialState:function() {
        return {circles:0, radius:5}
    },
    changeCircles:function(event) {
        let circleNum = event.target.value;
        this.setState({circles:circleNum});
    },
    render:function() {
        // Using underscore library
        var circles = _.range(this.state.circles)
        return (
            <div className="App">
                <p>
                    <input onChange={this.changeCircles} placeholder="Number of circles..." type="number"/>
                </p>
                <svg width = {1000} height = {500}>
                {circles.map((circle, index) =>  <Circle r={this.state.radius}
                                                    key={'circle-' + index}
                                                    offset = {this.state.radius * index}  />
                )}
        </svg>
        </div>
        );
    }
});

export default App;
