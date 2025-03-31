import React, { use } from 'react';
import Bottole from './Bottole/Bottole';
import 'Bottles.css'

const Bottoles = ({ bottolesPromise }) => {
  
  const bottole = use(bottolesPromise)
  console.log(bottole)
  return (
    <div>
      <h2>Bottole:{bottole.length}</h2>
      <div className='bottole-container'>{
       bottole.map(bottle=><Bottole key={bottle.id} bottle={bottle}></Bottole>)
      }</div>
    </div>
  );
};

export default Bottoles;