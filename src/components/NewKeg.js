import React from 'react';
import PropTypes from 'prop-types';

function NewKeg(props) {
  let _name = null;
  let _brand = null;
  let _price = null;
  let _alcoholContent = null;

  function handleNewKeg(event) {
    event.preventDefault();
    props.onNewKeg({name: _name.value, brand: _brand.value, price: _price.value, alcoholContent: _alcoholContent.value, pintsLeft: 124});
    _name.value = '';
    _brand.value = '';
    _price.value = '';
    _alcoholContent.val = '';
  }

  return (
    <div>
      <form onSubmit={handleNewKeg}>
        <p><input
          type='text'
          id='name'
          placeholder='Name of manufacturer'
          ref={(input) => {_name = input}}/></p>
        <p><input
          type='text'
          id='brand'
          placeholder='Brand'
          ref={(input) => {_brand = input}}/></p>
        <p><input
          type='text'
          id='price'
          placeholder='Price'
          ref={(input) => {_price = input}}/></p>
          <p><input
            type='text'
            id='alcoholContent'
            placeholder='Alcohol Content'
            ref={(input) => {_alcoholContent = input}}/></p>
        <button type='submit'>Add keg</button>
      </form>
    </div>
  );
}

NewKeg.propTypes = {
  onNewKeg: PropTypes.func
};

export default NewKeg;
