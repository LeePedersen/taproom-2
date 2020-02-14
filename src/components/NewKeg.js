import React from 'react';

function NewKeg(){
  return (
    <div>
      <form>
        <input
          type='text'
          id='name'
          placeholder='Name of manufacturer'/>
        <input
          type='text'
          id='brand'
          placeholder='Brand'/>
        <input
          type='text'
          id='price'
          placeholder='Price'/>
        <input
          type='text'
          id='price'
          alcoholContent='Price'/>
        <input
          type='hidden'
          id='alcoholContent'
          value='124'/>
        <button type='submit'>Add keg</button>
      </form>
    </div>
  );
}

export default NewKeg;
