import React, { Component } from 'react';
import eventImg from './sample/event.png';

class App extends Component {
  render() {
    return (
        <div className="event">
            <div className="event-img">
                <img src={eventImg} alt="event's name" />
            </div>
            <div className="event-hashtag">
                Hello World {this.props.data} !
            </div>
        </div>
    );
  }
}

export default App;