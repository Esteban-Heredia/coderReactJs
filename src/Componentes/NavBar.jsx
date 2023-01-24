import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

function NavBar() {
  const [state, setState] = useState({
    tintas: false,
    agujas: false,
    descartables: false
  });

  function tintas() {
    setState({...state, tintas: !state.tintas });
  }

  function agujas() {
    setState({...state, agujas: !state.agujas });
  }

  function descartables() {
    setState({...state, descartables: !state.descartables });
  }

  return (
    <div className="container-main-navbar">
      <div className="container-sub-logo">
        <img
          className="logo"
          src="../src/assets/img/logo.svg"
          alt="EH SUPPLIES Logo"
        />
      </div>
      <div className="container-sub-button">
        <div className="container-button-div">
          <button onClick={tintas}>Tintas</button>
          <div className={state.tintas ? "show" : "hide"}>
            <div className="elementos">elemento1</div>
            <div className="elementos">elemento2</div>
            <div className="elementos">elemento3</div>
          </div>
        </div>
        <div className="container-button-div">
          <button onClick={agujas}>Agujas</button>
          <div className={state.agujas ? "show" : "hide"}>
            <div className="elementos">elemento1</div>
            <div className="elementos">elemento2</div>
            <div className="elementos">elemento3</div>
          </div>
        </div>
        <div className="container-button-div">
          <button onClick={descartables}>Descartables</button>
          <div className={state.descartables ? "show" : "hide"}>
            <div className="elementos">elemento1</div>
            <div className="elementos">elemento2</div>
            <div className="elementos">elemento3</div>
          </div>
        </div>
      </div>
      <div>
        <SearchIcon className="icon" />
      </div>
    </div>
  );
}

export default NavBar;
