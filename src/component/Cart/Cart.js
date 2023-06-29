import React from 'react'
import { Link } from "react-router-dom";
import "./cart.css"
export const Cart= () => {
  return (
    <div>
       <h1 className='titulo'> Carrito de compras</h1>
       <Link to="/">
            <button>Volver al HOME</button>
        </Link>
    </div>
  )
}
