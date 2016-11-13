// Bubble chart Component
import React from 'react';
import {ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';
import {MuiThemeProvider, TextField} from 'material-ui';
import './css/Bubble.css'
// QuotePage component
var BubbleChart = React.createClass({
	// Set initial state of BubbleChart
	getInitialState(){
		return {search:''}
	},

	// Set the search to a value
	setSearch(event){
		var value = event.target.value;
		this.setState({search:value});
	},

	// Format the data
	formatData(data) {
		return data.map(function(d) {
			d.x = Number(d[this.props.xVar]);
			d.y = Number(d[this.props.yVar]);
			return d;
		}.bind(this));
	},

	// Filter down the data based on a search
	filterData(data, filter) {
		return data.filter((d) => d.state.match(filter))
	},

	// Render ScatterChart
	render() {
		// Format and filter data
		let formattedData = this.formatData(this.props.data);
		let dataSubset = this.filterData(formattedData, this.state.search);

		// Find static max values for axes
		// See docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
		let xMax = Math.max.apply(null, formattedData.map((d) => d.x));
		let yMax = Math.max.apply(null, formattedData.map((d) => d.y));

		// Return ScatterChart
		return (
			<MuiThemeProvider>
				<div className="statePage">
					<div>
					<TextField className="dataSearch" hintText="Find your state..." onChange={this.setSearch} />
						<ScatterChart width={500} height={500} margin={{top: 50, right: 100, bottom: 20, left: 20}}>
							<Scatter
							    data={dataSubset}
								width={500}
								isAnimationActive={false}
								fill="blue"
								opacity=".3"
								radius={100}
							/>
							<CartesianGrid />
							<Tooltip cursor={{strokeDasharray: '3 3'}}/>
							<XAxis label={this.props.xVarLabel} type="number" dataKey={'x'} domain={[0, xMax]} name='Population' />
					      	<YAxis label={this.props.yVarLabel} type="number" dataKey={'y'} domain={[0, yMax]} name='Electoral Votes'/>
						</ScatterChart>
					</div>
				</div>
			</MuiThemeProvider>
		);
	}
});

export default BubbleChart;
