import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Users from './Users'
import { Router, Route, Link } from 'react-router';

ReactDOM.render((
  <Router>
      <Route path="/" component={App} />
      <Route path="/users" component={Users} />
  </Router>
), document.getElementById('root'));
