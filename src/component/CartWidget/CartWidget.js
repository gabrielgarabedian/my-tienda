import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import "./CartWidget.css";


const CartWidget = () => {
  return (
    <div className='cartWidget'>
      <div>
        <AddShoppingCartIcon/>
        <p className='numAzar'>0</p>
      </div>
    </div>
  )
}

export default CartWidget