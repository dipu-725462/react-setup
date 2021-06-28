import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './client/components/Home';
import UserList from './containers/UserList';

export default () => {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/users' component={UserList} />
    </div>
  )
}
