import React from "react";
import "./navBar.css"
import logo from "../../assets/images/logo.png";
import carritoImg from "../../assets/images/carrito.png"

const NavBar = () => {
    
    return (
        <div className="container">
            <ul className="col-logo"><img className="nav-logo" src={logo} alt="" /></ul>
            <ul class="nav justify-content-center">
                
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Productos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contacto</a>
                </li>
            </ul>
            <ul>
                <a class="nav-link" href="#"><img className="nav-carrito-logo"src={carritoImg} alt="carritoImg" /></a>
            </ul>
        <hr />
        </div>
    );
};

export default NavBar;