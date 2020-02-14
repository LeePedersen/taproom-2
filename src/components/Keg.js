import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return(
    <div>
      <p>{props.name}</p>
      <p>{props.brand}</p>
      <p>{props.price}</p>
      <p>{props.alcoholContent}</p>
    </div>
  )
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired
};

export default Keg;
