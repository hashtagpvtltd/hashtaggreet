import React, { Component } from 'react';

class Event extends Component {
  render() {
    return (
        <div className="event">
            <div className="event-img">
                <img src={this.props.data.img} alt="event's name" />
            </div>
            <div className="event-content">
                <div className="font-heading">{this.props.data.hashtag}</div>
                <div className="font-sub-heading">{this.props.data.location}</div>
                <div className="font-sub-heading">{this.props.data.date}</div>
            </div>
        </div>
    );
  }
}

export default Event;