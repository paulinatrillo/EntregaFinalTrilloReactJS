import CartWidget from "../CartWidget/CartWidget"
import ItemListContainer from "../ItemListContainer/ItemListContainer"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom"
const NavBar = () => {
    return (
       <nav className="NavBar">
        <Link to='/'>
            <h3 className="titulo">Ecommerce Antiguo Bazar</h3>
        </Link>
        <div className='Categories'>
         <NavLink to={`/category/Cómodas`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Cómodas</NavLink>
         <NavLink to={`/category/MesasDeLuz`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Mesas de luz</NavLink>
         <NavLink to={`/category/JuegosDeComedor`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Juegos de comedor</NavLink>
        <NavLink to={`/category/Decoración`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Decoración</NavLink>
        </div> 
        <CartWidget/>
       </nav> 
    )
}

export default NavBar