import React from 'react';


const CartItem = ({ id, name, price, quantity }) => {
  return (
    <div className='CartItem'>
      <h4>{name}</h4>
      <p>Id: {id}</p>
      <p>Precio: ${price}</p>
      <p>Cantidad: {quantity}</p>
    </div>
  );
};

export default CartItem;