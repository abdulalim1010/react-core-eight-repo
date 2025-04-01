import React, { use, useState } from 'react';

import Bottole from './Bottole/Bottole';


const Bottoles = ({ bottolesPromise }) => {
  const [cart, setCart] = useState([]);
  const bottole = use(bottolesPromise)
  const handleAddToCart = () => {
    console.log('bottole will to added to cart');
  }
  //console.log(bottole)
  return (
    <div>
      <h2>Bottole:{bottole.length}</h2>
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