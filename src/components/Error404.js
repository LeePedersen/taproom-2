import React from 'react';
import { Link } from 'react-router-dom';

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
