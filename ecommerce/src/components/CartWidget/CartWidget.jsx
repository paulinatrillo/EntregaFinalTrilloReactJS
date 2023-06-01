import './CartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom'
import cart from './assets/carrito.png'


const CartWidget = () => {

const { totalQuantity } = useContext(CartContext)

  return (
    <Link to='/carrito' className='CartWidget' style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
      <img className='CartImg' src={cart} alt="carrito.png" />
      {totalQuantity}
    </Link>
  );
}

export default CartWidget;