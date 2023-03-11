import React, { useEffect, useState } from "react";
import Card from "./Card";
import gDatos from "../assets/productos/gDatos";
import { Link, useParams } from "react-router-dom";


export const ItemListContainer = () => {
  const [productData, setProductData] = useState([]);
  const {categoria} = useParams ()

  useEffect(() => {
    if (categoria){
      gDatos()
        .then((resuelto) => {
          setProductData(resuelto.filter (productData => productData.categoria === categoria));
        })
  
        .catch((error) => {
          console.error(error);
        });
    }else {
      gDatos()
        .then((resuelto) => {
          setProductData(resuelto);
        })
  
        .catch((error) => {
          console.error(error);
        });
    }
  }, [categoria]);

  return (
    <div className="container-main-card">
    {productData && productData.length > 0 ? (
      productData.map((product) => (
     <Card key={product.id} product={product}/>
      ))
    ) : (
      <p>Cargando...</p>
    )}
  </div>
  );
};

export default ItemListContainer;