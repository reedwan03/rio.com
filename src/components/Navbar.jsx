import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/rioLogo.png";
import cart from "../assets/images/cart.png";
import { useState, useEffect } from "react";
import { FiAlignCenter } from "react-icons/fi";
import Cart from "./Cart";

const Navbar = () => {


  const linkClass = ({ isActive }) =>
    isActive
      ? "font-secBold text-iconColor tracking-widest transition-all z-50"
      : "font-secMedium tracking-widest transition-all z-50";

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="mynav py-8 px-10 md:px-20 lg:px-24 lg:py-10  items-center grid grid-flow-col auto-rows-auto justify-between gap-x-11 ">
      <NavLink to="/">
        <img src={logo} alt="My Image" className="w-24  md:w-28" />
      </NavLink>

      <div className="hidden  md:block ">
        <div className="flex space-x-2 text-white gap-16 font-secMedium text-extra-small cursor-pointer">
          <NavLink to="/" className={linkClass}>
            HOME
          </NavLink>
          <NavLink to="/shop" className={linkClass}>
            SHOP
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            ABOUT
          </NavLink>
        </div>
      </div>

      <div className="grid grid-flow-col auto-rows-auto  -grid-cols-1 justify-between items-center gap-5">
        <div>
          <img src={cart} alt="cart-logo" className="w-4 md:w-5" />
        </div>
        <Cart />
        <div className=" hidden lg:block bg-darkBgColor rounded-full px-8 py-5 text-white font-secBold text-extra-small tracking-widest ">
          👋 HI, RIDWAN
        </div>
        <div>
          <div className="relative flex items-center gap-5 ">
            <div className="w-6 h-6  rounded-full bg-gradient-to-br from-blue-500 to-yellow-200 md:w-10 md:h-10 ">
              {" "}
            </div>

            {windowWidth <= 770 && (
              <FiAlignCenter className="inline text-white" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
