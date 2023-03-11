import React from "react";
import { useCartContext } from "./CartContext";
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import { Link } from "react-router-dom";

function CartContainer() {
  const { carritoItems,eliminarDelCarrito, vaciarElCarrito, totalPrecio } = useCartContext();

  console.log(carritoItems);
  return (
    <div className="Cart-container-main">
      {carritoItems.length === 0 ? (
        <p>No hay items en el carrito</p>
      ) : (
        <>
          {carritoItems.map((item) => (
            <div className="Cart-card-main" key={item.id}>
              <Link to={`/detalleProducto/${item.id}`}>
              <div className="Cart-card-mini">
                <img src={item.foto} alt={item.nombre} />
                <h1>
                  {item.nombre} {item.color}
                </h1>
                <h2>Precio: {item.precio}</h2>
              </div>
              </Link>
              <h3> {item.cantidad} </h3>
              <h3> {item.cantidad * item.precio} </h3>
              <button onClick={() => eliminarDelCarrito(item)}>
                <RemoveShoppingCartIcon />
              </button>
            </div>
          ))}
          <div className="container-Cart-btn">
            <button onClick={vaciarElCarrito}>
              vaciar carrito <ProductionQuantityLimitsIcon />
            </button>
            <h3>El total de la compra es: ${totalPrecio} </h3>
            <button>
              <PointOfSaleIcon />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartContainer;
