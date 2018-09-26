import React from 'react';
import { Router, Route } from 'react-router';

import App from './App';
import home from './home';
import member from './member';

const Routes = (props) => (
  <Router {...props}>
    <Route exact path="/" component={App}/>
    <Route exact path="/home" component={home}/>
    <Route exact path="/member" component={member}/>

  </Router>
);

export default Routes;