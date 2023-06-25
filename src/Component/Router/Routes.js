import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Login from './Component/UserAuth/Login';
import UserDetail from './Component/UserListing/UserDetail';

const Routes = () => {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route exact path="/userdetail" component={UserDetail} />
      {/* Redirect to login page for any other routes */}
      
    </Router>
  );
};

export default Routes;
