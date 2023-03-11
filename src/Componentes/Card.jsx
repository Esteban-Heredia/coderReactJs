import React from "react";
import { Link } from "react-router-dom";

function Card({ product }) {

  return (
          <div className="card-units" >
            <Link className="card-container" to={`/detalleProducto/${product.id}`}>
              <button type="button">
              <h2>
                {product.nombre} {product.color}
              </h2>
              <img src={product.foto} alt="foto" />
              <h3> {product.categoria} </h3>
              <h4> $ {product.precio}.00 </h4>
              </button>
            </Link>
          </div>
  );
}

export default Card;