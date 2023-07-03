import React, { useContext, useEffect } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import "./CartWidget.css";
import { CarritoContext } from '../../Context/Context';


const CartWidget = () => {
  
  const [carrito, setCarrito] = useContext(CarritoContext);
  
  const quantity = carrito.reduce((acc, prod) => {
    return acc + prod.quantity
  }, 0);


   return (
    <div className='cartWidget'>
      <div>
        <AddShoppingCartIcon/>
        <p className='numAzar'>{quantity}</p>
      </div>
    </div>
  )
}
 
export default CartWidget;


