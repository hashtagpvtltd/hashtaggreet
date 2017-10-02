import React, { Component } from 'react';

class Event extends Component {
  render() {
    return (
        <div className="event">
            <div className="event-img">
                <img src={this.props.data.img} alt="event's name" />
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