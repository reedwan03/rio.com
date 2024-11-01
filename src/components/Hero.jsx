import React from "react";
import HeroImg from "../assets/images/Hero-img.png";
import ShopImg from "../assets/images/shop-icon.png";
import PetCatCard from "./PetCatCard";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { MdSell } from "react-icons/md";
import EmblaCarousel from "./EmblaCarousel";
import Pets from "../pets.json";

const Hero = () => {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const imageURLs = Pets.map((pet) => pet.image); // Extract image URLs
    setImageUrls(imageURLs); // Update state with image URLs
  }, []);

  console.log(imageUrls);

  const OPTIONS = { loop: true };
  const SLIDE_COUNT = 8;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

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
    <>
      <div className="animated-element flex flex-col-reverse justify-center items-center  px-10 md:px-20  lg:px-24  lg:items-center   md:justify-between md:flex-row md:items-center border-b border-lightBgColor">
        <div>
          <div className=" flex flex-col gap-6 md:gap-8 ">
            <h1 className="font-primaryRegular text-center md:text-left text-4xl md:text-5xl lg:text-6xl  tracking-tighter  text-transparent bg-clip-text bg-gradient-to-tr from-gradientColor via-white via-white via-white to-white ">
              Everything, <br></br> furry friends
            </h1>
            <p className="text-white font-secMedium text-extra-small text-center w-1/2 m-auto leading-5 md:text-left md:m-0 md:text-xs  md:w-3/4 md:leading-6 ">
              At rio.com, we offer all the services you need to keep your pets
              healthy, happy, and well cared for 😊.
            </p>

            <NavLink to="/shop" className="pb-8">
              <div className="bg-lightBgColor rounded-md  hover:bg-strokeLight transition-all border-strokeLight border font-secBold  text-extra-small  p-4 m-auto  md:m-0 md:text-xs  text-pryLight md:p-6 md:w-40  w-40 flex justify-center gap-2 tracking-widest">
                <img src={ShopImg} alt="cart-logo" className="w-4" /> SHOP NOW
              </div>
            </NavLink>
          </div>
        </div>

        <div className="flex justify-center align-center overflow m-auto ">
          <div className="-my-20 h-6/10 overflow-hidden">
            <img src={HeroImg} alt="Hero Image" className=" h-100 " />
          </div>
        </div>
      </div>

      <div className="py-16 flex justify-center">
        <PetCatCard />
      </div>

      <div className="flex flex-col gap-10  md:p-24">
        <div className="bg-darkBgColor p-8 rounded-md">
          <h3 className="font-primaryRegular text-white text-xl flex items-center gap-3 ">
            <MdSell className="text-iconColor" /> TOP SELLERS
          </h3>
        </div>
        <div className="w-auto rounded-md ">
          <EmblaCarousel
            slides={SLIDES}
            options={OPTIONS}
            imageUrls={imageUrls}
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
