import React from "react";
import img from "../../assets/iron.webp";
import "./home.css"

const HomePage =( )=>{
    return (
        <>
          <div>
              <img src={img} alt="imgLogo" className="iron"/>
          </div>
        </>
    );
};

export default HomePage;