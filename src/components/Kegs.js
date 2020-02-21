import React from 'react';
import PropTypes from 'prop-types';
import Keg from './Keg';
import ginger from '../img/ginger.png';
import { v4 } from 'uuid';

function Kegs(props) {
  return (
    <div>
    {props.allKegs.map((keg, index) =>
      <div className="kegs">
        <img className="ginger-img" src={ginger} alt="a piece of ginger"></img>
        <Keg name={keg.name}
        brand ={keg.brand}
        price ={keg.price}
        alcoholContent ={keg.alcoholContent}
        pintsLeft ={keg.pintsLeft}
        key={keg.id}/>
      </div>
    )}
    </div>
  )
}

Kegs.propTypes = {
  allKegs: PropTypes.array
}

export default Kegs;
