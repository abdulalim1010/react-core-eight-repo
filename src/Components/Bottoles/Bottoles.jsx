import React, { use } from 'react';

import Bottole from './Bottole/Bottole';


const Bottoles = ({ bottolesPromise }) => {
  
  const bottole = use(bottolesPromise)
  console.log(bottole)
  return (
    <div>
      <h2>Bottole:{bottole.length}</h2>
<div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
      {
       bottole.map(bottle=><Bottole key={bottle.id} bottle={bottle}></Bottole>)
      }</div>
    </div>
  );
};

export default Bottoles;