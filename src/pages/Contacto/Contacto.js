import React from "react";
import { Link } from "react-router-dom";
import "./contacto.css"

const ContactoPage =( )=>{
    return (
        <>
          <div className="contacto">
               <h1 className="titulo-contacto">Nuestas lieneas de contacto</h1>
               <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam sit amet nisl suscipit adipiscing bibendum est. Amet volutpat consequat mauris nunc congue nisi. Mauris sit amet massa vitae. Tortor at auctor urna nunc id cursus metus. Condimentum vitae sapien pellentesque habitant morbi tristique. Volutpat ac tincidunt vitae semper quis. Consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat.
              Risus in hendrerit gravida rutrum quisque non tellus orci ac. Eleifend quam adipiscing vitae proin sagittis. Porta lorem mollis aliquam ut. Malesuada bibendum arcu vitae elementum. Mattis ullamcorper velit sed ullamcorper. Massa enim nec dui nunc. Ornare massa eget egestas purus viverra accumsan in. Fusce id velit ut tortor. Libero volutpat sed cras ornare arcu dui vivamus. Aliquam faucibus purus in massa tempor nec feugiat. Duis ut diam quam nulla porttitor.

               Id semper risus in hendrerit gravida rutrum quisque non. Velit laoreet id donec ultrices tincidunt arcu non sodales. Scelerisque eu ultrices vitae auctor. Morbi tempus iaculis urna id volutpat. Morbi blandit cursus risus at ultrices mi tempus. Turpis egestas maecenas pharetra convallis posuere morbi leo urna. Mi bibendum neque egestas congue quisque egestas diam in. Aliquet sagittis id consectetur purus ut. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. A lacus vestibulum sed arcu non.
               </p>
               <Link to="/tienda">
                  <button className='div-compra'>Ir a la Tienda</button>
               </Link>
               <Link to="/">
                  <button className='div-compra'>Volver al HOME</button>
               </Link>

          </div>
        </>
    );
};

export default ContactoPage;