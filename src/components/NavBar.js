import React, {Fragment} from "react";

const Navbar = () => {
    return (
    <Fragment>
        <nav class="navbar navbar-expand-lg  navbar-dark bg-dark">
  <a class="navbar-brand" href="#">MundoAndroid</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav mr-auto ml-auto">
      <a class="nav-item nav-link" href="#">Sobre Nosotros</a>
      <a class="nav-item nav-link" href="#">Productos</a>
      <a class="nav-item nav-link" href="#">Contacto</a>
    </div>
  </div>
</nav>
    </Fragment>
    )
}

export default Navbar;