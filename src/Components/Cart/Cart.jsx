import React from 'react';
import './Cart.css';

const Cart = ({cart,handlRemoveCart}) => {
  return (
    <div className='cart-container'>
      {
        cart.map(bottle => <div key={bottle.id}>
          <img src={bottle.img} alt="" />
          <button onClick={()=>handlRemoveCart(bottle.id)}>delet</button>
        </div>)
     } 
    </div>
  );
};

export default Cart;