import React from 'react';
import PropTypes from 'prop-types';
import Keg from './Keg';
import ginger from '../img/ginger.png';
import { v4 } from 'uuid';

function Kegs(props) {
  return (
    <div>
    {props.allKegs.map((keg) =>
      <div className="kegs">
        <img className="ginger-img" src={ginger} alt="a piece of ginger"></img>
        <Keg name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
          pintsLeft={keg.pintsLeft}
          onDecreasePints={props.onDecreasePints}
          currentRouterPath={props.currentRouterPath}
          id={keg.id}
          key={keg.id}/>
      </div>
    )}
    </div>
  )
}

Kegs.propTypes = {
  allKegs: PropTypes.array,
  currentRouterPath: PropTypes.string,
  onDecreasePints: PropTypes.func.isRequired
}

export default Kegs;
