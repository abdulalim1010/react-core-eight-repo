import React from 'react';
import './Bottole.css'
import Bottoles from '../Bottoles';
const Bottole = ({ bottle,handleAddToCart }) => {
  const { img,name,price,quantity,seller,
shipping,stock
 } = bottle;
  //console.log(bottle)
  return (
    <div className='card bottle'>
      <img src={img} alt="" />
      <div style={{padding:"10px"}}><h3>{name}</h3>
      <p>{price}</p>
      <h4>{quantity}</h4>
      <h3>{seller}</h3>
      <p>{ shipping}</p>
      <p>{stock}</p>
      <button onClick={()=>handleAddToCart(bottle)}>Buy Now</button></div>
</div>
  );
};

export default Bottole;