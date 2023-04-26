import CartWidget from "../CartWidget/CartWidget"
import ItemListContainer from "../ItemListContainer/ItemListContainer"
import './NavBar.css';
const NavBar = () => {
    return (
       <nav>
        <h3 className="titulo">E-commerce Antiguo Bazar</h3>
         <div>
         <button>Cómodas</button>
         <button>Mesas de luz</button>
         <button>Juegos de comedor</button>
         <button> Decoración </button>
        </div>
        <CartWidget/>
       </nav> 
    )
}

export default NavBar