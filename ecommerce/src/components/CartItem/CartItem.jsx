import React from 'react';

const CartItem = ({ id, name, price, quantity }) => {
  return (
    <div>
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      <p>Quantity: {quantity}</p>
    </div>
  );
};

export default CartItem;