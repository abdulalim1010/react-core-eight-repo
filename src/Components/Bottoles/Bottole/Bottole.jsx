import React from 'react';
import './Bottole.css'
import Bottoles from '../Bottoles';
const Bottole = ({ bottle }) => {
  const { img } = bottle;
  console.log(bottle)
  return (
    <div className='card'>
      <img src={bottle.img} alt="" />
     
     
    </div>
  );
};

export default Bottole;