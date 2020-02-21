import React from 'react';
import PropTypes from 'prop-types';
import Kegs from './Kegs';
import ginger from '../img/ginger.png';
import { v4 } from 'uuid';

function Admin(props) {
  console.log(props.currentRouterPath);
  return (
    <div>
    <h2>Employee View</h2>
    <Kegs allKegs={props.allKegs}
    onDecreasePints={props.onDecreasePints}
    currentRouterPath={props.currentRouterPath} />
    </div>
  )
}

Admin.propTypes = {
  allKegs: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired,
  onDecreasePints: PropTypes.func.isRequired
}

export default Admin;
