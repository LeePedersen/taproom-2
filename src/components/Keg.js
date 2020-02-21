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

const kegTextEmpty = {
  postion: 'relative',
  backgroundColor: '#36752d',
  fontSize: '30px',
  padding: '20px',
  marginTop: '30px',
  textAlign: 'left',
  color: 'grey',
}

const kegTitle = {
  fontSize: '50px',
  fontVariant: 'small-caps'
}

function Keg(props) {
  console.log(props.currentRouterPath);
  if (props.currentRouterPath === '/employees') {
    if (props.pintsLeft === 0) {
      return (
        <div style={kegTextEmpty}>
          <p style={kegTitle}>{props.brand} {props.name}</p>
          <p>Price: ${props.price}</p>
          <p>Alcohol Content: {props.alcoholContent}%</p>
          <p><em>This keg is empty!</em></p>
        </div>
      )
    } else {
      return (
        <div style={kegText}>
          <p style={kegTitle}>{props.brand} {props.name}</p>
          <p>Price: ${props.price}</p>
          <p>Alcohol Content: {props.alcoholContent}%</p>
          <p>Pints Left: {props.pintsLeft}</p>
          <button onClick={()=>props.onDecreasePints(props.id)}>Decrease by 1 pint</button>
        </div>
      )
    }
  } else {
    if (props.pintsLeft > 0) {
      return (
        <div style={kegText}>
          <p style={kegTitle}>{props.brand} {props.name}</p>
          <p>Price: ${props.price}</p>
          <p>Alcohol Content: {props.alcoholContent}%</p>
          <p>Pints Left: {props.pintsLeft}</p>
        </div>
      )
    }
  }
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alcoholContent: PropTypes.number.isRequired,
  pintsLeft: PropTypes.number.isRequired,
  onDecreasePints: PropTypes.func,
  currentRouterPath: PropTypes.string,
  id: PropTypes.string.isRequired
};

export default Keg;
