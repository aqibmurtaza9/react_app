import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Login from './Login';
import UserDetails from './UserDetails';

const Routes = () => {
  return (
    <>
      <Route exact path="/" component={Login} />
      <Route exact path="/userdetails" component={UserDetails} />
      {/* Redirect to login page for any other routes */}
      <Redirect to="/" />
    </>
  );
};

export default Routes;
