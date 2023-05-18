import React, { useContext, useState } from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../Context/CartContext';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const {addItem} = useContext(CartContext)

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item ={
        id,name,price
    }
    addItem(item,quantity)
  };

  const handleFinishPurchase = () => {
    // Lógica para finalizar la compra
    console.log('Compra terminada');
  };

  return (
    <article className='CardItem'>
      <header className='Header'>
        <h2 className='ItemHeader'>{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className='ItemImg' />
      </picture>
      <section>
        <p className='Info'>Categoria: {category}</p>
        <p className='Info'>Descripción: {description}</p>
        <p className='Info'>Precio: ${price}</p>
      </section>
      <footer className='ItemFooter'>
        {quantityAdded > 0 ? (
          <button onClick={handleFinishPurchase} className='Option'>
            Terminar compra
          </button>
        ) : (
          <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
        )}
      </footer>
    </article>
  );
};

export default ItemDetail;