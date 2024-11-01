import React from "react";
import { IoChevronForward } from "react-icons/io5";
import DogImg from "../assets/images/dog.png";
import BirdImg from "../assets/images/bird.png";
import CatImg from "../assets/images/cat.png";

const PetCatCard = () => {
  return (
    <div className="flex flex-col gap-8 p-8  md:px-20 md:py-6 lg:px-24  lg:items-center md:flex-row md:items-center ">
      <div className="  catcard border-orange-300 border-2 flex p-6 rounded-3xl overflow-hidden w-96 h-48 relative text-white font-secBold bg-gradient-to-r  from-orange-700 to-orange-400">
        <div className="flex flex-col  justify-between">
          <div className=" opacity-80 tracking-wider text-orange-300">DOGS</div>
          <div className="self-baseline p-4 bg-orange-400 rounded-lg cursor-pointer">
            <IoChevronForward />
          </div>
        </div>

        <img
          src={DogImg}
          alt="Hero Image"
          className="w-40 absolute bottom-0 right-0"
        />
      </div>
      <div className=" catcard  border-blue-700 border-2 flex p-6 rounded-3xl overflow-hidden w-96 h-48 relative text-white font-secBold  bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="flex flex-col  justify-between">
          <div className=" opacity-60 tracking-wider text-blue-200">BIRDS</div>
          <div className="self-baseline p-4 bg-blue-700 rounded-lg cursor-pointer">
            <IoChevronForward />
          </div>
        </div>

        <img
          src={BirdImg}
          alt="Hero Image"
          className="w-40 absolute bottom-0 right-0"
        />
      </div>
      <div className=" catcard  border-purple-500 border-2 flex p-6 rounded-3xl overflow-hidden w-96 h-48 relative text-white font-secBold bg-gradient-to-r from-purple-900 to-purple-500">
        <div className="flex flex-col  justify-between ">
          <div className=" opacity-60 tracking-wider">CATS</div>

          <div className="self-baseline p-4 bg-purple-500 rounded-lg cursor-pointer">
            <IoChevronForward />
          </div>
        </div>

        <img
          src={CatImg}
          alt="Hero Image"
          className="w-36 absolute bottom-0 right-0"
        />
      </div>
    </div>
  );
};

export default PetCatCard;
