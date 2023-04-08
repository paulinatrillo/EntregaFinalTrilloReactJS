import CartWidget from "../CartWidget/CartWidget"
import ItemListContainer from "../ItemListContainer/ItemListContainer"
const NavBar = () => {
    return (
       <nav>
        <h3>E-commerce Antiguo Bazar</h3>
         <div>
         <button>Cómodas</button>
         <button>Mesas de luz</button>
         <button>Juegos de comedor</button>
        </div>
        <CartWidget/>
       </nav> 
    )
}

export default NavBar