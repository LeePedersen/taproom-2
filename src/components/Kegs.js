import React from 'react'
import Keg from './Keg'

const allKegs = [
  {}
]

function Kegs() {
  return (
    <div>
    {allKegs.map((keg, index) =>
      <Keg name={keg.name}
      brand ={keg.brand}
      price ={keg.price}
      alcoholContent ={keg.alcoholContent}
      key={index}/>
    )}
    </div>
  );
}

export default Kegs
