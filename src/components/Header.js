import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div className="header">
      <Link to="/">Home</Link> | <Link to="/newkeg">Add Keg</Link>
    </div>
  );
}

export default Header;
