import React from 'react';

const HomePage = () => {

  const handleClick = () => {
    console.log('You clicked Button !');
  };

  return (<div>
    <p>This is Home-Page</p>
    <button
      onClick={handleClick}>
      Click Me
    </button>
  </div>);
}

export default HomePage;
