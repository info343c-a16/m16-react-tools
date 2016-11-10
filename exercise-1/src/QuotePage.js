// Page of quotes to show
import React, { Component } from 'react';
import Quote from './Quote';
import Baby from 'babyparse';
import './css/Quote.css';
import $ from 'jquery';

// QuotePage component
var QuotePage = React.createClass({
	// Get initial state: "quotes" as empty array
	getInitialState(){
		return{quotes:[]}
	},

	// When component mounts, get the data and set the state of "quotes"
	componentDidMount(){
		$.get('data/quotes.csv').then(function(data) {
			var parsed = Baby.parse(data, {header:true});
			this.setState({quotes:parsed.data})
		}.bind(this));
	},

	// Render a <Quote> element for each element in the state
	render() {
		return (
			<div className="quotePage">
				<div>
					<p className="instructions">Iterate through <code>this.state.quotes</code>, and create a new <code>Quote</code> component for each one</p>
				</div>
			</div>
		);
	}
});

export default QuotePage;
