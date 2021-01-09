import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getTokenadmin } from './Common';

// handle the public routes
function PublicRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => !getTokenadmin() ? <Component {...props} /> : <Redirect to={{ pathname: '/dashboard' }} />}
    />
  )
}

export default PublicRoute;