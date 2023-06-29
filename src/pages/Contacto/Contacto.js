import React from "react";
import { Link } from "react-router-dom";
import "./contacto.css"

const ContactoPage =( )=>{
    return (
        <>
          <div className="contacto">
               <h1>Muestra los contactos</h1>
               <Link to="/tienda">
                  <button>Ir a la Tienda</button>
               </Link>
               <Link to="/">
                  <button>Volver al HOME</button>
               </Link>

          </div>
        </>
    );
};

export default ContactoPage;