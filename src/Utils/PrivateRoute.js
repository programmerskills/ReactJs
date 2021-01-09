import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getTokenadmin } from './Common';

// handle the private routes
function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => getTokenadmin() ? <Component {...props} /> : <Redirect to={{ pathname: '/', state: { from: props.location } }} />}
    />
  )
}

export default PrivateRoute;