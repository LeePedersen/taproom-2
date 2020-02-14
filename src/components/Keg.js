import React from 'react';
import PropTypes from 'prop-types';

const kegText = {
  postion: 'relative',
  backgroundColor: '#36752d',
  fontSize: '30px',
  padding: '20px',
  marginTop: '30px',
  textAlign: 'left'
}

const kegTitle = {
  fontSize: '50px',
  fontVariant: 'small-caps'
}

function Keg(props) {
  return(
    <div style={kegText}>
      <p style={kegTitle}>{props.brand} {props.name}</p>
      <p>Price: {props.price}</p>
      <p>Alcohol Content: {props.alcoholContent}</p>
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