import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// pages
import Categories from '../pages/Categories';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Categories} />
      {/* <Route exact path="/:id" component={Dashboard} /> */}
    </Switch>
  </BrowserRouter>
);

export default Routes;
