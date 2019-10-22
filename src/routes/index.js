import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// pages
import Categories from '../pages/Categories';
import Category from '../pages/Category';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Categories} />
      <Route exact path="/:category" component={Category} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
