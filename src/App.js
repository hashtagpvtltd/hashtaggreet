import React, { Component } from 'react';
import List from './List';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="app-container">
        <div id="header">
          <div className="font-x-large">#Greet</div>
        </div>
        <div id="body">
          <List />
        </div>
        <div id="footer">
          <div className="font-sub-heading">
            "Time is like a fashionable host<br/>
            That slightly shakes his parting guest by the hand,<br/>
            And with his arm outstretch'd, as he would fly,<br/>
            Grasps in the comer."
          </div>
          <br/>
          <div className="font-heading"><a href="https://hashhello.typeform.com/to/lrL7KZ">#StayInTouch</a></div>
        </div>
      </div>
    );
  }
}

export default App;
