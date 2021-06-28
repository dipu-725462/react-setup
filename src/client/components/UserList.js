import React, { Fragment, useEffect } from 'react';

import UserCard from './UserCard';

const UserList = props => {
  const { users, fetchUserData } = props;

  useEffect(() => {
    fetchUserData && fetchUserData();
  }, []);

  return (
    <center>
      <h2>User's in Bangalore</h2>
      <Fragment>
        {
          (users || []).map(item => {
            const { id, name, email } = item;
            return <UserCard key={`${id}-${name}`} id={id} name={name} email={email} />
          })
        }
      </Fragment>
    </center>
  )
}

export default UserList;
