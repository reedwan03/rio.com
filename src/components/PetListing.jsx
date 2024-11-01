import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";

const PetListing = ({ pet, index, petCounts, setPetCounts }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = pet.description;
  let name = pet.name;

  if (!showFullDescription) {
    description = description.substring(0, 50) + "...";
  }

  const handleIncrement = (index) => {
    setPetCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[index]++;
      return newCounts;
    });
  };

  const handleDecrement = (index) => {
    setPetCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[index] = Math.max(newCounts[index] - 1, 0);
      return newCounts;
    });
  };

  return (
    <div>
      <div
        key={pet.id}
        className="ind-pet flex flex-col gap-3 bg-white w-48 h-56 md:w-56 md:h-96 rounded-lg p-2  "
      >
        <div className="overflow-hidden flex justify-center h-64 ">
          <img src={pet.image} alt="bird-ig" className="" />
        </div>
        <div className="text-xl font-secBold  text-lightBgColor">
          {pet.name.substring(0, 10) + "..."}
        </div>
        <p className="font-secMedium text-extra-small mb-2">{description}</p>
        <div className="flex justify-between items-center font-secMedium mb-1">
          <div className="font-secBold text-xl text-lightBgColor">
            {pet.price}
          </div>
          <div className="flex gap-2 items-center bg-slate-100 p-2 rounded-sm justify-center ">
            <div
              className=" bg-slate-200 p-2 cursor-pointer rounded-md"
              onClick={() => handleDecrement(index)}
            >
              <CiCircleMinus className=" text-2xl" />
            </div>

            <div>{petCounts[index]}</div>
            <div className=" bg-slate-200 p-2 cursor-pointer rounded-md">
              <CiCirclePlus
                onClick={() => handleIncrement(index)}
                className=" text-2xl"
              />
            </div>
          </div>
        </div>

        <div className="cart-btn bg-purple-700 flex self-baseline items-center justify-center gap-2 p-4 text-white font-secBold text-extra-small rounded-md tracking-widest w-full ">
          <FaShoppingCart className="text-whiter" />
          <div> ADD TO CART</div>
        </div>
      </div>
    </div>
  );
};

export default PetListing;
