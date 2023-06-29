import React from "react";
import "./navBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";



const NavBar = () => {
    return (
    <nav className="navBar">
        <ul className="barraNavegacion">
            <Link to="/" className="contenedorPagina">Home</Link>
            <Link to="/contacto" className="contenedorPagina">Contacto</Link>
            <Link to="/tienda" className="contenedorPagina">Tienda</Link>
            <Link to={"/cart"}><CartWidget/></Link>
        </ul>
    </nav>);
}

export default NavBar;

