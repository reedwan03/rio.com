import React, { useState, useReducer, useEffect, useContext } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { CartItemContext } from "../layout/Mainlayout";
import { NavLink } from "react-router-dom";
import { LuForward } from "react-icons/lu";

const PetListing = ({ pet }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [petQuantity, setPetQuantity] = useState(0);
  const { cartItem, setCartItem } = useContext(CartItemContext);
  const { showCart, setShowCart } = useContext(CartItemContext);

  let description = pet.description;

  const handleAddToCart = (pet, quantity) => {
    const existingItem = cartItem.find((item) => item.pet.id === pet.id);

    if (quantity === 0) return;

    if (existingItem) {
      setCartItem(
        cartItem.map((item) => {
          if (item.pet.id === pet.id) {
            return { ...item, quantity: item.quantity + quantity };
          }
          return item;
        })
      );
    } else {
      const newItem = {
        pet: pet,
        quantity: quantity,
      };
      setCartItem([...cartItem, newItem]);
    }

    setPetQuantity(0);
  };

  if (!showFullDescription) {
    description = description.substring(0, 50) + "...";
  }

  const handleIncrement = () => {
    setPetQuantity(petQuantity + 1);
  };

  const handleDecrement = () => {
    setPetQuantity(Math.max(petQuantity - 1, 0));
  };

  const addCartElement = () => {
    handleAddToCart(pet, petQuantity);
    setShowCart(true);
  };

  return (
    <div>
      {/* <NavLink to={`/shop/${pet.id}`}> */}
      <div
        key={pet.id}
        className="ind-pet flex flex-col gap-3  border-dlate-300 border-4 w-48 h-56 md:w-56 md:h-96 rounded-lg p-3 bg-gradient-to-br from-white to-slate-100"
      >
        <div className="overflow-hidden flex justify-center h-64 bg-white ">
          <img src={pet.image} alt="bird-ig" className="" />
        </div>
        <div className="text-xl font-secBold  text-lightBgColor">
          {pet.name.substring(0, 10) + "..."}
        </div>
        <p className="font-secMedium text-extra-small mb-2">{description}</p>
        <div className="flex justify-between items-center font-secMedium mb-1">
          <div className="font-secBold text-xl text-lightBgColor">
            ${pet.price}
          </div>
          <div className="flex items-center bg-slate-100   rounded-sm justify-center ">
            <div
              className=" bg-slate-200 p-2 cursor-pointer rounded-md"
              onClick={handleDecrement}
            >
              <CiCircleMinus className=" text-2xl" />
            </div>

            <div className="p-2 cursor-pointer rounded-md w-10  flex justify-center">
              {petQuantity}
            </div>
            <div className=" bg-slate-200 p-2 cursor-pointer rounded-md">
              <CiCirclePlus onClick={handleIncrement} className=" text-2xl" />
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <div
            onClick={addCartElement}
            className="cart-btn bg-iconColor flex self-baseline items-center justify-center gap-2 p-4 text-white font-secBold text-xs rounded-md tracking-widest  "
          >
            <FaShoppingCart className="text-whiter" />
          </div>

          <NavLink
            to={`/shop/${pet.id}`}
            className="detail-btn flex justify-center items-center  bg-purple-700  font-secBold text-xs p-2 flex-1 rounded-md gap-2 text-white tracking-widest "
          >
            DETAILS
            <LuForward />
          </NavLink>
        </div>
      </div>
      {/* </NavLink> */}
    </div>
  );
};

export default PetListing;
