import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// pages
import Categories from '../pages/Categories';
import Facts from '../pages/Facts';
import NotFound from '../pages/NotFound';

import Header from '../components/Header';

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Categories} />
      <Route exact path="/:category" component={Facts} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
