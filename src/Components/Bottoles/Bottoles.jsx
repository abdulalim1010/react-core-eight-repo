import React, { use, useState } from 'react';

import Bottole from './Bottole/Bottole';


const Bottoles = ({ bottolesPromise }) => {
  const [cart, setCart] = useState([]);
  const bottole = use(bottolesPromise)
  const handleAddToCart = (bottle) => {
    //console.log('bottole will to added to cart',bottle);

    const newCart = [...cart, bottle];
    setCart(newCart);
  }
  //console.log(bottole)
  return (
    <div>
      <h2>Bottole:{bottole.length}</h2>
      <p>Added to cart:{cart.length}</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap:"10px",borderRadius:"10px" }}>
      {
          bottole.map(bottle => <Bottole key={bottle.id}
        handleAddToCart={handleAddToCart}
            bottle={bottle}></Bottole>)
      }</div>
    </div>
  );
};

export default Bottoles;