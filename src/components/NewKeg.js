import React from 'react';
import PropTypes from 'prop-types';

function NewKeg(props) {
  let _name = null;
  let _name = null;
  let _name = null;
  let _name = null;

  return (
    <div>
      <form>
        <p><input
          type='text'
          id='name'
          placeholder='Name of manufacturer'/></p>
        <p><input
          type='text'
          id='brand'
          placeholder='Brand'/></p>
        <p><input
          type='text'
          id='price'
          placeholder='Price'/></p>
          <p><input
            type='text'
            id='alcoholContent'
            placeholder='Alcohol Content'/></p>
        <p><input
          type="hidden"
          id='alcoholContent'
          value='124'/></p>
        <button type='submit'>Add keg</button>
      </form>
    </div>
  );
}

export default NewKeg;
