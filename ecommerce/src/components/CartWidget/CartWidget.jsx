import './CartWidget.css';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { getQuantity } = useContext(CartContext);

  return (
    <Link to='/cart' className='CartWidget' style={{ display: getQuantity() > 0 ? 'block' : 'none' }}>
      <img className='CartImg' src={cart} alt="cart-widget" />
      {getQuantity()}
    </Link>
  );
}

export default CartWidget;