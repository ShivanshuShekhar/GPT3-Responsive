import React from 'react';
import './possibility.css';

import possibilityImage from '../../assets/possibility.png';

const Possiblity = () => {
  return (
    <div className='gpt3__possibility section__padding'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt="possibility" />
      </div>
    </div>
  )
}

export default Possiblity