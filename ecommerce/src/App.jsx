import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/cart';
import CartWidget from './components/CartWidget/CartWidget';
import { CartProvider } from './components/Context/CartContext';



function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          </Routes>
          <CartWidget />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;