import React ,{useEffect, useState}from 'react';
import { useParams } from 'react-router-dom';
import { db } from "../../firebase/firebaseConfig";
import {collection, query, getDocs,where, documentId} from "firebase/firestore";
import { Link } from 'react-router-dom';
import Item from '../../component/Item/Item';
import "./detailPage.css"
import Contador from '../../component/Contador/Contador';


const DetailPage = () => {
  const [producto, setProducto ] = useState([]);
  const {id} = useParams();
  console.log("el id ",id)
  console.log(producto)

  useEffect (()=>{
    const getProducto = async()=>{
      try {
        const q = query(collection(db, "productos"), where(documentId(), "==", id));
        const querySnapshot = await getDocs (q);
        const productos = [];
        querySnapshot.forEach ((producto)=> {
          productos.push({...producto.data(), id: producto.id});
        });
        setProducto(productos);
        console.log(productos)
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    };
      getProducto();
  }, [id]);
       
  return (
    <div>
      <h1 className='encabezado'>
        Vista del producto
      </h1>
      <div className='contenedor-detalle'>
        <div className='DetailList'>
          {producto ? producto.map((producto)=>{
            return (
              <div key={producto.id} className='card'>
                <Item  producto={producto} className='card'/>
              </div>)
          }): null}
        </div>
        <div >
          <Contador/>
          <button className='div-compra'>Agregar al Carrito</button>
        </div>
      </div>

      <Link to="/tienda">
        <button>Ir a la Tienda</button>
      </Link>
      <Link to="/">
        <button>Volver al HOME</button>
      </Link>
    </div>
    
  )
}

export default DetailPage