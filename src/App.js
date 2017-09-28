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
      </div>
    );
  }
}

export default App;
