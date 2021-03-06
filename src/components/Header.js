import React, { useContext} from "react";
import { DataContext } from "context/DataProvider";
import { Link } from "react-router-dom";
import Nike from "images/Nike.jpg";


export const Header = () => {
  const value = useContext(DataContext);
  const [carrito] = value.carrito;
  const [menu, setMenu] = value.menu;


  const toogleMenu = () =>{
    setMenu(!menu)
  }
 

  return (
    <header>
      <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><div className="logo">
    <Link to="/">
      <div className="logo">
        <img src={Nike} alt="Nike" width="150" />
      </div>
      </Link>
      </div></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"><box-icon name="menu"></box-icon></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarText">
      <ul class="navbar-nav mr-auto ml-auto">
        <li class="nav-item">
          <a class="nav-link active link" aria-current="page" href="#"><Link to="/" className="link">INICIO</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active link" href="#"><Link to="/productos" className="link">PRODUCTOS</Link></a>
        </li>
      </ul>
      <div className="cart" onClick={toogleMenu}>
        <box-icon name="cart"></box-icon>
        <span className="item__total"> {carrito.length} </span>
      </div>
    </div>
  </div>
</nav>
    </header>
  );
};
