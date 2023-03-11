import { useState } from 'react';
import { Link } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function ItemCounter({sumaCarrito}) {
  const [cantidadItem, setCantidadItem] = useState(0);

  const agregarAlCarrito = () => {
    sumaCarrito(cantidadItem);
  };

  const sumaItem = () => {
    setCantidadItem(cantidadItem + 1);
  };

  const restaItem = () => {
    setCantidadItem(cantidadItem - 1);
  };

  return (
    <div className='Container-Main-Counter'>
        <div className='Container-btn'>
      <button onClick={restaItem}>-</button>
      <span>{cantidadItem}</span>
      <button onClick={sumaItem}>+</button>
      </div>
      {cantidadItem >= 1 && (
        <div className='Container-links'>
        <Link className='Link-Cart' to='/cart'>Terminar la compra</Link>
        <button  onClick={agregarAlCarrito} type='button'><AddShoppingCartIcon/></button>
        <Link className='Link-Home' to='/'>Seguir comprando</Link>
      </div>
      )}
    </div>
  );
}

export default ItemCounter;
