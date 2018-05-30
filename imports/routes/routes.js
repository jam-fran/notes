import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Switch, Route, withRouter } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Signup from '../ui/Signup';
import Dashboard from '../ui/Dashboard';
import Login from '../ui/Login';
import NotFound from '../ui/NotFound';

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/dashboard'];

const history = createHistory();

export const onAuthChange = (isAuthenticated) => {
  const pathName = history.location.pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathName);
  const isAuthenticatedPage = authenticatedPages.includes(pathName);

  if (isUnauthenticatedPage && isAuthenticated) {
    history.replace('/dashboard');
  } else if (isAuthenticatedPage && !isAuthenticated) {
    history.replace('/');
  }
};

export const routes = (
  <Router history={history}>
    <div>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/dashboard/:id" component={Dashboard}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="*" component={NotFound}/>
      </Switch>
    </div>
  </Router>
);
