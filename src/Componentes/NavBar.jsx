import React,{useState} from "react";
import SearchIcon from "@mui/icons-material/Search";

function NavBar() {

    const[toggleValue, setToggleValue] = useState(true);

    function toggle() {
        setToggleValue(!toggleValue);
    }


  return (
    <div className="container-main-navbar">
      <div className="container-sub-logo">
        <img className="logo" src="../src/assets/img/logo.svg" alt="EH SUPPLIES Logo" />
      </div>
      <div className="container-sub-button">
        <div className="container-button-div">
          <button onClick={toggle}>Tintas</button>
          <div className={toggle ? "algo" : "visible"}>
          <div className="elementos">elemento1</div>
          <div className="elementos">elemento2</div>
          <div className="elementos">elemento3</div>
          </div>
        </div>
        <div className="container-button-div">
          <button>Agujas</button>
          <div className="elementos">elemento1</div>
          <div className="elementos">elemento2</div>
          <div className="elementos">elemento3</div>
        </div>
        <div className="container-button-div">
          <button>Descartables</button>
          <div className="elementos">elemento1</div>
          <div className="elementos">elemento2</div>
          <div className="elementos">elemento3</div>
        </div>
      </div>
      <div>
        <SearchIcon className="icon" />
      </div>
    </div>
  );
}

export default NavBar;
