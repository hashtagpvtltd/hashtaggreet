import React, { Component } from 'react';
import List from './general/List';
import './App.css';
import config from './config';

class App extends Component {

  componentWillMount(){
    localStorage.setItem('apiRoot', config.apiRoot);
  }

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
            we publish a monthly newsletter
          </div>
          <div className="font-heading"><a href="https://hashhello.typeform.com/to/lrL7KZ"><u>#StayInTouch</u></a></div>
        </div>
      </div>
    );
  }
}

export default App;
