import React, { useContext } from 'react';
import {ProductosContext } from "../../Context/Context";
import { Link } from "react-router-dom";
import "./cart.css"
import Item from '../Item/Item';

export const Cart= () => {
  const { producto } = useContext(ProductosContext)

  if (producto.length === 0) {
    return (
      <div>
        <h1 className='titulo'> Carrito de compras</h1>
        {producto.map((producto) => (
          <Item key={producto.id} producto={producto} />
        ))}
        <Link to="/">
          <button>Volver al HOME</button>
        </Link>
      </div>
    );
   ;
  }else{
    return (
      <div className='titulo'>
        <p className='carritoEstado'>Tu carrito está vacío</p>
        <p className='carritoEstado2'>Para adquirir nuestros productos puedes hacerlo seleccionandolos en nuestra <Link to="/tienda">
                  <button className='div-compra2'> Tienda</button>
               </Link></p>
        <Link to="/">
          <button>Volver al HOME</button>
        </Link>

      </div>
    );
  }
}
