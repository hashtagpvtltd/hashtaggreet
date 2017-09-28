import React, { Component } from 'react';
import Event from './Event'
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="app-container">
        <div id="header">
          <div className="font-logo">#Greet</div>
        </div>
        <div id="body">
          <div className="list">
            <div className="item">
              <Event data="1" />
            </div>
            <div className="item">
              <Event data="2" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
