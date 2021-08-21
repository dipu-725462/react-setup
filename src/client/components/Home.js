import React from 'react';

const HomePage = () => {

  const handleClick = () => {
    console.log('You clicked Buttons !');
  };

  return (
    <div>
      <h1>This is ➞ Home Page 🏠 🎁 😎</h1>
      <button
        onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default HomePage;
