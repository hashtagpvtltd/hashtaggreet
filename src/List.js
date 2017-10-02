import React, { Component } from 'react';
import Event from './Event';
import events from './sample/events'

class List extends Component {
  render() {
    var rows = [];
    for (var i=0; i < events.length; i++) {
        rows.push(<Event data={events[i]} key={i} />);
    }
    return (
        <div className="list">
            <div className="list-header">
                <div className="font-x-large">Events in&nbsp;<u>#India</u> </div>
            </div>
            <div className="list-body">
                {rows}
            </div>
        </div>
    );
  }
}

export default List;