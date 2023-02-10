import React, { useState } from "react";
import { Link } from "react-router-dom";
import ButtonSC from "./ButtonSC";

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

  const [clickCount, setClickCount] = useState(0)
  
  const handleClick = () => {
  setClickCount (clickCount + 1)
  };

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
          <Link to= '/categoria/Tintas'>
          <button onClick={tintas}>Tintas</button>
          <div className={state.tintas ? "show" : "hide"}>
            <div className="elementos">elemento1</div>
            <div className="elementos">elemento2</div>
            <div className="elementos">elemento3</div>
          </div>
          </Link>
        </div>
        <div className="container-button-div">
          <Link to= '/categoria/agujas'>
          <button onClick={agujas}>Agujas</button>
          <div className={state.agujas ? "show" : "hide"}>
            <div className="elementos">elemento1</div>
            <div className="elementos">elemento2</div>
            <div className="elementos">elemento3</div>
          </div>
          </Link>
        </div>
        <div className="container-button-div">
          <Link to= '/categoria/descartable'>
          <button onClick={descartables}>Descartables</button>
          <div className={state.descartables ? "show" : "hide"}>
            <div className="elementos">elemento1</div>
            <div className="elementos">elemento2</div>
            <div className="elementos">elemento3</div>
          </div>
          </Link>
        </div>
      </div>
      <div className="container-search">
        <span className="material-icons-outlined">search</span>
      </div>
      <div className="container-shopping">
        <p className= {clickCount === 0 ? 'invisible' : ''} > {clickCount} </p>
        <span className="material-icons-outlined">shopping_cart</span>
      </div>
      <ButtonSC handleClickProp={handleClick}/>
    </div>
  );
}

export default NavBar;
