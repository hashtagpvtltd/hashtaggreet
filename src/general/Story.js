import React, { Component } from 'react';

class Story extends Component {

    render() {
        let media = null;
        if(this.props.data.extended_entities)
        {
            var mediaArray = this.props.data.extended_entities.media;
            if(mediaArray[0].type === "photo"){
                media = <img src={mediaArray[0].media_url_https} alt={this.props.data.full_text} />;
            }
        }

        return (
            <div className="event">
                <div className="event-media">
                    {media}
                </div>
                <div className="event-content">
                    <div className="font-sub-heading">{this.props.data.full_text}</div>
                </div>
            </div>
        );
    }
}

export default Story;