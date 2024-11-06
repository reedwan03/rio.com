import React, { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export const CartItemContext = createContext("");

const Mainlayout = () => {
  const [cartItem, setCartItem] = useState([]);
  const [showCart, setShowCart] = useState(false);

  return (
    <CartItemContext.Provider
      value={{ cartItem, setCartItem, showCart, setShowCart }}
    >
      <div className="h-screen flex flex-col">
        <Navbar />
        <div>
          <Outlet />
        </div>
      </div>
    </CartItemContext.Provider>
  );
};

export default Mainlayout;
