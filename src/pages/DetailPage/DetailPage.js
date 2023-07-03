import React ,{useEffect, useState}from 'react';
import { useParams } from 'react-router-dom';
import { db } from "../../firebase/firebaseConfig";
import {collection, query, getDocs,where, documentId} from "firebase/firestore";
import { Link } from 'react-router-dom';
import Item from '../../component/Item/Item';
import "./detailPage.css"
import Loading from '../../component/Loading/Loading';


const DetailPage = () => {
  const [producto, setProducto ] = useState([]);
  const [loading, setLoading] = useState(true);
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
      setTimeout(() => {
        setLoading(false);
      }, 2000);
  }, [id]);

  if (loading) {
    return (
      <div className="contenedor-loading">
        <Loading />
      </div>
    );
  }else{
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
        <div>
            {producto ? producto.map((producto)=>{
              return (
                <div key={producto.id} className='descripcion'>
                  <h2> Descripcion del producto seleccionado:</h2>
                  <p className='des2'>{producto.descripcion}</p>
                </div>)}): null}
            <div>
              <Link to="/tienda">
                <button className='div-compra'>Seguir comprando</button>
              </Link>
              <Link to="/">
                <button className='div-compra'>Volver al HOME</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  };
}

export default DetailPage