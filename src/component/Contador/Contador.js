import React, { useState, useContext } from 'react';
import { CarritoContext } from '../../Context/Context';
import "./contador.css";

const Contador = () => {
    const [carrito, setCarrito] = useContext(CarritoContext);

    //const [numero, setNumero] = useState(1);

    /*const sumar = () => {
        if (numero < 5) {
            setNumero(numero + 1);
        }
    };

    const restar = () => {
        if (numero > 1) {
            setNumero(numero - 1);
        }
    };*/

    const sumar = () => {
        if (carrito < 5) {
            setNumero(carrito + 1);
        }
    };

    const restar = () => {
        if (carrito > 1) {
            setNumero(carrito - 1);
        }
    };


    return (
        <div>
            <div className='itemContador'>
                <div className='container'>
                <div className='botonera'>
                    <button onClick={restar} className='restar'>-</button>
                </div>
                <div className='botonera'>
                    <p className='cantidad'>{numero}</p>
                </div>
                <div className='botonera'>
                    <button onClick={sumar} className='sumar'>+</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Contador;
/*import React, { useState, useContext } from 'react';
import { ProductosContext } from '../../Context/Context';
import "./contador.css";

const Contador = () => {
    const { agregarAlCarrito } = useContext(ProductosContext);

    const [numero, setNumero] = useState(0);

    const sumar = () => {
        if (numero < 5) {
            setNumero(numero + 1);
        }
    };

    const restar = () => {
        if (numero > 0) {
            setNumero(numero - 1);
        }
    };

    const agregarAlCarritoClick = () => {
        const producto = {
            id: producto.id,
            nombre: producto.nombre,
            cantidad: numero,
        };

        agregarAlCarrito(producto);
    };

    return (
        <div>
            <div className='itemContador'>
                <div className='container'>
                <div className='botonera'>
                    <button onClick={restar} className='restar'>-</button>
                </div>
                <div className='botonera'>
                    <p className='cantidad'>{numero}</p>
                </div>
                <div className='botonera'>
                    <button onClick={sumar} className='sumar'>+</button>
                </div>
                </div>
            </div>
            <button onClick={agregarAlCarritoClick} className='div-compra'>Agregar al Carrito</button>
        </div>
    );
};

export default Contador;/

/////////////////////////////////////////////////////////////////////////////////////////

/*import React, { useState } from 'react'
import "./contador.css"

const Contador = () => {

    const [numero, setNumero] = useState(0);
    
    const sumar = ()=>{
        if (numero < 5){
            setNumero(numero +1)
        }
    }

    const restar =()=>{
        if (numero > 0){
            setNumero(numero -1)
        }       
    }
    
  return (
    <div>
        <h1 className='unidades'>
            Unidades
        </h1>
        <div className='itemContador'>
            <div className='botonera'>
                <button onClick={restar} className='restar'>-</button>
            </div>
            <div className='botonera'>
                <p className='cantidad'>{numero}</p>
            </div>
            <div className='botonera'>
                <button onClick={sumar} className='sumar'>+</button>
            </div>
        </div>
    </div>
    
  )
}

export default Contador*/


 