import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import NavBar from "./Componentes/NavBar";
import ItemListContainer from "./Componentes/ItemListContainer";
import ItemDetailContainer from "./Componentes/ItemDetailContainer";
import CartWidget from "./Componentes/CartWidget";
import CartContainer from "./Componentes/CartContainer";
import { CartContextProvider } from "./Componentes/CartContext";
import "./assets/Scss/app.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContextProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />}></Route>
        <Route
          path="/categoria/:categoria"
          element={<ItemListContainer />}
        ></Route>
        <Route
          path="/detalleProducto/:id"
          element={<ItemDetailContainer />}
        ></Route>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/Cart" element={<CartContainer to="/" />} />
      </Routes>
      </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
