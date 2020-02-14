import React from 'react';
import Keg from './Keg';
import ginger from '../img/ginger.png';

const allKegs = [
  {
    name: "Ginger beer",
    brand: "Reed's",
    price: "$5.00",
    alcoholContent: "0%",
    image: ginger,
    pintsLeft: "124"
  },
  {
    name: "Ginger beer",
    brand: "Reed's",
    price: "$5.00",
    alcoholContent: "0%",
    image: ginger,
    pintsLeft: "124"
  },
  {
    name: "Ginger beer",
    brand: "Reed's",
    price: "$5.00",
    alcoholContent: "0%",
    image: ginger,
    pintsLeft: "124"
  },
  {
    name: "Ginger beer",
    brand: "Reed's",
    price: "$5.00",
    alcoholContent: "0%",
    image: ginger,
    pintsLeft: "124"
  },
  {
    name: "Ginger beer",
    brand: "Reed's",
    price: "$5.00",
    alcoholContent: "0%",
    image: ginger,
    pintsLeft: "124"
  },
  {
    name: "Ginger beer",
    brand: "Reed's",
    price: "$5.00",
    alcoholContent: "0%",
    image: ginger,
    pintsLeft: "124"
  }
]

function Kegs() {
  return (
    <div>
    {allKegs.map((keg, index) =>
      <div className="kegs">
        <img className="ginger-img" src={ginger} alt="a piece of ginger"></img>
        <Keg name={keg.name}
        brand ={keg.brand}
        price ={keg.price}
        alcoholContent ={keg.alcoholContent}
        pintsLeft ={keg.pintsLeft}
        key={index}/>
      </div>
    )};
    </div>
  );
}

export default Kegs;
