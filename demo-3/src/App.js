// Application
import React from 'react';
import './css/App.css';
import $ from 'jquery';
import Baby from 'babyparse';
import BubbleChart from './BubbleChart';
import '../node_modules/font-awesome/css/font-awesome.css';

var App = React.createClass({
	getInitialState(){
		return{stateData:[]}
	},

	// When the component mounts, get (and parse) the data. Then set the state.
	componentDidMount(){
		$.get('data/state_data.csv').then(function(data) {
			var parsed = Baby.parse(data, {header:true});
			this.setState({stateData:parsed.data})
		}.bind(this));
	},
	render() {
		// Return links and show anything inside the <App> component (children)
		return (
				<div className="App">
					<BubbleChart
						data={this.state.stateData}
						xVar="population"
						yVar="votes"
						xVarLabel="Population"
						yVarLabel="# of Votes"
					/>
				</div>
		);
	}
});

export default App;
