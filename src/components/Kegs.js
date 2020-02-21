import React from 'react';
import Keg from './Keg';
import ginger from '../img/ginger.png';

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
        key={index}/>
      </div>
    )}
    </div>
  )
}

export default Kegs;
