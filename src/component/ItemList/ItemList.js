import React, {useState,useEffect}from 'react';
import { db } from "../../firebase/firebaseConfig";
import {collection, query, getDocs,where} from "firebase/firestore";
import Item from '../Item/Item';
///import { Link } from "react-router-dom";
import "./itemList.css"

/*const ItemList = () => {
  const [productos, setProductos ] = useState([]);
       
  useEffect (()=>{
    const getProductos = async()=>{
      try {
        const q = query(collection(db, "productos"));
        const querySnapshot = await getDocs (q);
        const productos = [];
        //console.log("vacio",productos)
        querySnapshot.forEach ((producto)=> {
          productos.push({...producto.data(), id: producto.id});
        });
        setProductos(productos);
        console.log(productos)
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    };
      getProductos();
  }, []);

    return (<>
       <div className="itemList">
          {productos ? productos.map((producto)=>{
            return (
            <div key={producto.id} className='productoLista'>
              
                <Item  producto={producto}/>
              
            </div>)
          }): null}
       </div>
    </>
    ) 
  };
  
  export default ItemList;*/

  /// ---------------probando una modificacion codigo----------


  const ItemList = () => {
    const [productos, setProductos] = useState([]);
    const [filtroCategoria, setFiltroCategoria] = useState("");
  
    useEffect(() => {
      const getProductos = async () => {
        try {
          let q = query(collection(db, "productos"));
          if (filtroCategoria !== "") {
            q = query(collection(db, "productos"), where("categoria", "==", filtroCategoria));
          }
          const querySnapshot = await getDocs(q);
          const productos = [];
          querySnapshot.forEach((producto) => {
            productos.push({ ...producto.data(), id: producto.id });
          });
          setProductos(productos);
        } catch (error) {
          console.error("Error al obtener los productos:", error);
        }
      };
  
      getProductos();
    }, [filtroCategoria]);
  
    return (
      <>
        <div className="filtroCategoria">
          <select value={filtroCategoria} onChange={(e) => setFiltroCategoria(e.target.value)}>
            <option value="">Todas las categorías</option>
            <option value="comic">Comic</option>
            <option value="figuras">Figuras</option>
            <option value="peluches">Peluches</option>
          </select>
        </div>
  
        <div className="itemList">
          {productos.map((producto) => (
            <div key={producto.id} className="productoLista">
              <Item producto={producto} />
            </div>
          ))}
        </div>
      </>
    );
  };
  
  export default ItemList;

