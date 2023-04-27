import CartWidget from "../CartWidget/CartWidget"
import ItemListContainer from "../ItemListContainer/ItemListContainer"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom"
const NavBar = () => {
    return (
       <nav className="NavBar">
        <Link to='/'>
            <h3>Ecommerce Antiguo Bazar</h3>
        </Link>
        <div className='Categories'>
         <NavLink to={`/category/Cómodas`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}></NavLink>
         <NavLink to={`/category/MesasDeLuz`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}></NavLink>
         <NavLink to={`/category/JuegosDeComedor`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}></NavLink>
        </div> <NavLink to={`/category/Decoración`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}></NavLink>
        <CartWidget/>
       </nav> 
    )
}

export default NavBar