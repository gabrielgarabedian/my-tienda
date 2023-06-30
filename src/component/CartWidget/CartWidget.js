import React, { useContext } from 'react';
import {ProductosContext } from "../../Context/Context";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import "./CartWidget.css";

const CartWidget = () => {
  const { producto } = useContext(ProductosContext)
  
  return (
    <div className='cartWidget'>
      <div>
        <AddShoppingCartIcon/>
        <p className='numAzar'>{producto[0].length}</p>
      </div>
    </div>
  )
}

export default CartWidget

