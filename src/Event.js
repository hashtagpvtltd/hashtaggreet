import React, { Component } from 'react';

class Event extends Component {
  render() {
    let media = null;
    if(this.props.data.mediaIsVideo){
        media = <video autoplay="autoplay" loop="loop" ><source src={this.props.data.media} type="video/mp4" /></video>;
    }
    else{
        media =  <img src={this.props.data.media} alt="event's name" />;
    }

    return (
        <div className="event">
            <div className="event-media">
                {media}
            </div>
            <div className="event-content">
                <div className="font-heading">
                    <a href={this.props.data.link} target="_blank">
                        {this.props.data.hashtag}
                    </a>
                </div>
                <div className="font-sub-heading">{this.props.data.location}</div>
                <div className="font-sub-heading">{this.props.data.date}</div>
            </div>
        </div>
    );
  }
}

export default Event;