import React from 'react';
import { Route } from 'react-router';

/* containers */
import { App } from 'containers/App';
import Home from 'containers/App/home';
import AsyncForm from 'components/asyncForm/asyncForm.js';

export default (
  <Route path="/" component={App}>
  	<Route path="home" component={Home} />
    <Route path="asyncform" component={AsyncForm} />
  </Route>
);
