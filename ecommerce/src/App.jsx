import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'


function App() {
  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer greeting = {'¡Bienvenido/a!'} />
        <ItemCount initial={1} stock={15} onAdd={(quantity) => console.log('Cantidad agregada', quantity)}/>
        <ItemDetailContainer/>
    </div>
  );
}

export default App
