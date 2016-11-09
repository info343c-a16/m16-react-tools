// Video component -- show a youtube iframe
import React from 'react';

var Video = React.createClass({
    render() {
        return(
            <div className="video">
                <iframe src={'https://www.youtube.com/embed/' + this.props.url} />
            </div>
        )
    }
});

export default Video;
