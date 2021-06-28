import React from 'react'

const UserCard = props => {
  const { id, name, email } = props;

  const card_style = {
    background: 'white',
    margin: '20px 0px',
    padding: '2px 20px',
    width: '300px',
    cursor : 'pointer',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    userSelect : 'none'
  }

  return (
    <div style={card_style}>
      <p>
        <b>User ID</b> : {id}
      </p>
      <p>
        <b>Name:</b> {name}
      </p>
      <p>
        <b>Email:</b> {email}
      </p>
    </div>
  )
}

export default UserCard;
