import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import gDatos from "../assets/productos/gDatos";
import { useCartContext } from "./CartContext";
import ItemCounter from "./ItemCounter";

function ItemDetailContainer() {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);

  const {agregarCarrito, carritoItems} = useCartContext()

  const sumaCarrito = (cantidadItem)=>{
    agregarCarrito({... productData, cantidad:cantidadItem})
  }

  console.log(carritoItems)

  useEffect(() => {
    gDatos()
      .then((resuelto) => {
        const producto = resuelto.find((producto) => producto.id === id);
        setProductData(producto);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <div className="Container-Detail-Main">
      {productData ? (
        <div className="Container-Detail">
          <img src={productData.foto} alt={productData.nombre} />
          <div className="Container-Info-Detail">
            <div className="Container-Detail-Text">
              <h1>
                {productData.nombre} {productData.color}{" "}
              </h1>
              <p>Descripción: {productData.descripcion} </p>
              <h2>Precio: {productData.precio}</h2>
            </div>
            <ItemCounter sumaCarrito={sumaCarrito} />
          </div>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;
