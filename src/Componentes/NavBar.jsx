import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCartContext } from "./CartContext";

function NavBar() {
  const [state, setState] = useState({
    tintas: false,
    agujas: false,
    descartables: false,
  });

  function tintas() {
    setState({ ...state, tintas: !state.tintas });
  }

  function agujas() {
    setState({ ...state, agujas: !state.agujas });
  }

  function descartables() {
    setState({ ...state, descartables: !state.descartables });
  }
  
  const { carritoItems } = useCartContext();
  
  return (
    <div className="container-main-navbar">
      <div className="container-sub-logo">
      <Link to='./'>
        <img
          className="logo"
          src="../src/assets/img/logo.svg"
          alt="EH SUPPLIES Logo"
        />
      </Link>
      </div>
      <div className="container-sub-button">
        <div className="container-button-div">
          <Link to= "/categoria/tinta">
          <button onClick={tintas}>Tintas</button>
          </Link>
        </div>
        <div className="container-button-div">
          <Link to= "/categoria/agujas">
          <button onClick={agujas}>Agujas</button>
          </Link>
        </div>
        <div className="container-button-div">
          <Link to="/categoria/descartable">
          <button onClick={descartables}>Descartables</button>
          </Link>
        </div>
      </div>
      <div className="container-shopping">
        <Link to='/cart'>
        <p className= {carritoItems.length === 0 ? 'invisible' : ''} > {carritoItems.length} </p>
        <span className="material-icons-outlined">shopping_cart</span>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
