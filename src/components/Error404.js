import React from 'react';

const error = {
  textShadow: 'none',
  color: 'darkred'
}

function Error404(){
  return (
    <div style={error}>
      <h2>The page you are looking for does not exist</h2>
    </div>
  );
}

export default Error404;
