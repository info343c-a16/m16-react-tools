import React from 'react';

var Quote = React.createClass({
    render() {
        return(
            <div className="quote">
                <blockquote><em>{this.props.text}</em></blockquote>
                <a target="_blank" href={this.props.url}>- {this.props.author}</a>
            </div>
        )
    }
});

export default Quote;
