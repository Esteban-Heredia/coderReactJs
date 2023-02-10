import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import gDatos from "../assets/productos/gDatos";

function Card(props) {
  const [productData, setProductData] = useState([]);

  const {categoria} = useParams


  useEffect(() => {
    if (categoria) {
      gDatos()
        .then((resuelto) => {
          setProductData(resuelto);
          console.log(resuelto)
        })
        .catch((error) => {
          console.error(error);
        });

    }
  }, []);


  return (
    <div className="container-main-card">
      {productData && productData.length > 0 ? (
        productData.map((e) => (
          <div className="card-units" key={e.id}>
            <Link className="card-container" to={`/detalleProducto/${e.id}`}>
              <button type="button">
              <h2>
                {e.nombre} {e.color}
              </h2>
              <img src={e.foto} alt="foto" />
              <h3> {e.categoria} </h3>
              <h4> $ {e.precio}.00 </h4>
              </button>
            </Link>
          </div>
        ))
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export default Card;
