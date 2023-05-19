import React, { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
  totalQuantity: 0
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  console.log(cart);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
      setTotalQuantity((prevTotal) => prevTotal + quantity);
    } else {
      console.error("El producto ya fue agregado");
    }
  };

  const removeItem = (itemId) => {
    const removedItem = cart.find((item) => item.id === itemId);
    if (removedItem) {
      const newCart = cart.filter((item) => item.id !== itemId);
      const removedQuantity = removedItem.quantity;
      setCart(newCart);
      setTotalQuantity((prevTotal) => prevTotal - removedQuantity);
    }
  };

  const clearCart = () => {
    setCart([]);
    setTotalQuantity(0);
  };

  const isInCart = (itemId) => {
    return cart.some((item) => item.id === itemId);
  };

  return (
    <CartContext.Provider value={{ cart, totalQuantity, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext