import React, {Fragment} from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Productocard from './components/producto/Producto';

function App() {
  return (
      <div>
        <NavBar></NavBar>
        <Productocard></Productocard>      
      </div>
  );
}

export default App;
