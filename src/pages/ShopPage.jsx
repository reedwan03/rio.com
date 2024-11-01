import React, { useState } from "react";

import ShopIcon from "../assets/images/shop.png";
import { NavLink } from "react-router-dom";
import Pets from "../pets.json";
import PetListing from "../components/PetListing";

const ShopPage = () => {
  const [count, setCount] = useState(0);
  const [petCounts, setPetCounts] = useState(Array(Pets.length).fill(0));


  // const handleIncrement = () => {
  //   setCount(count + 1);
  //   console.log(count);
  // };

  // const handleDecrement = () => {
  //   if (count > 0) {
  //     setCount(count - 1);
  //     console.log(count);
  //   }
  // };

  return (
    <div className=" flex px-6 py-16 md:px-24 md:py-20 gap-12 flex-col">
      <div className=" flex flex-col-reverse items-center gap-8  text-center md:flex-row md:justify-start text-4xl md:text-5xl lg:text-6xl  tracking-tighter ">
        <div className="font-primaryRegular  text-transparent bg-clip-text bg-gradient-to-tr from-gradientColor via-white via-white via-white to-white">
          Welcome to Shop
        </div>
        <div>
          <img src={ShopIcon} alt="My Image" className="w-12  md:w-auto  " />
        </div>
      </div>

      <div>
        <ul className="flex gap-8 text-white font-secMedium">
          <li className="bg-lightBgColor px-4 py-2 rounded-lg cursor-pointer">
            All
          </li>
          <li className="bg-lightBgColor px-4 py-2 rounded-lg cursor-pointer">
            Dogs
          </li>
          <li className="bg-lightBgColor px-4 py-2 rounded-lg cursor-pointer">
            Birds
          </li>
          <li className="bg-lightBgColor px-4 py-2 rounded-lg cursor-pointer">
            Cats
          </li>
        </ul>
      </div>

      <div className="bg-darkBgColor p-4 md:p-10 overflow-y-auto flex flex-wrap gap-6 rounded-2xl justify-center">
        {Pets.map((pet, index) => (
          <PetListing
            pet={pet}
            index={index}
            petCounts={petCounts}
            setPetCounts={setPetCounts}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
