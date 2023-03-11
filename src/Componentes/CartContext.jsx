import { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
  const [carritoItems, setCartItems] = useState([]);

  const agregarCarrito = (item) => {
    
    const itemGuardado = carritoItems.find ((i)=> i.id === item.id);

    if(itemGuardado){
        const nuevosItems = carritoItems.map((i) =>
        i.id === item.id ? { ...i, cantidad: itemGuardado.cantidad + item.cantidad } : i
      );
      setCartItems(nuevosItems);
    } else {
        setCartItems([...carritoItems, item]);
    }

    console.log(item)

    console.log(carritoItems)
  };

  const vaciarElCarrito = () => setCartItems ([]);

  const eliminarDelCarrito = (item) => {
    const nuevoCarritoItem = carritoItems.filter((carritoItem) => carritoItem.id !== item.id);
    setCartItems([...nuevoCarritoItem]);
  };

  const [totalPrecio, setTotalPrecio] = useState(0);

  useEffect(() => {
    let total = 0;
    carritoItems.forEach(item => {
      total += item.cantidad * item.precio;
    });
    setTotalPrecio(total);
  }, [carritoItems]);


  return (
    <CartContext.Provider value={{ carritoItems, agregarCarrito, eliminarDelCarrito, vaciarElCarrito, totalPrecio }}>
      {children}
    </CartContext.Provider>
  );
}
