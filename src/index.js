import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './App';


class Routes extends React.Component{
  render() {
    return (
      <Router>
        <div class="app-container">
          <Route exact path="/" component={() => (<App type="events" />)} />
          <Route exact path="/stories" component={() => (<App type="stories" />)} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);

registerServiceWorker();