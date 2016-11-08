// Circle Component

// Import react to use
import React from 'react';

// Create circle Component
var Circle = React.createClass({
    render() {
        return <circle r={this.props.r}
                       fill="blue"
                       cx = {this.props.offset}
                       cy= {this.props.offset}
                       style={{opacity:.5}}
                />
    }
});

export default Circle;
