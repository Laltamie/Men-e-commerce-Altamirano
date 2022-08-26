import React from "react";
import logo from "./images/logo.png"

const NavBar = () => {
    
    return (
        <div>
            <div class="container" >
                <ul class="nav d-flex align-items-center">
                    <li>
                    <a className="nav-link active" aria-current="page" href="#"><img src={logo} width="48" alt="Gemini"/></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link link_nav" aria-current="page" href="#">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link link_nav" href="#">Productos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link link_nav" href="#">Carrito</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link link_nav" href="#">Contacto</a>
                    </li>
                </ul>
                <hr />                
            </div>
        </div>
    );
};

export default NavBar;