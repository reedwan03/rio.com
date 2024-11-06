import React, { useState, useEffect } from "react";

import ShopIcon from "../assets/images/shop.png";
import { NavLink, useSearchParams } from "react-router-dom";

import PetListing from "../components/PetListing";
import Spinner from "../components/Spinner";

const ShopPage = () => {
  const [count, setCount] = useState(0);
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchParams] = useSearchParams();
  const filter = searchParams.get("filter");

  const filteredPets = pets.filter((pet) => pet.type === filter);

  const linkClass = ({ isActive }) =>
    isActive &&
      // ? "bg-white text-lightBgColor px-4 py-2 rounded-lg cursor-pointer"
 "bg-lightBgColor px-4 py-2 rounded-lg cursor-pointer text-white";

  console.log(filteredPets);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const res = await fetch("/api/pets");
        const data = await res.json();
        setPets(data);
      } catch (error) {
        console.log("Error Fetching Data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
  }, []);

  // const [cartArray, setCartArray] = useState([]);

  // const handleAddToCart = (pet, quantity) => {
  //   const newItem = {
  //     pet: pet,
  //     quantity: quantity,
  //   };
  //   setCartArray([...cartArray].concat(newItem));
  // };

  // useEffect(() => {
  //   console.log(cartArray);
  // }, [cartArray]);

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
          <li>
            <NavLink to="/shop" className={linkClass}>
              All
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop?filter=dog" className={linkClass}>
              Dogs
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop?filter=bird" className={linkClass}>
              Birds
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop?filter=cat" className={linkClass}>
              Cats
            </NavLink>
          </li>
        </ul>
      </div>
      {/* <div className="text-white"> {JSON.stringify(cartArray)} </div> */}
      <div className="bg-darkBgColor p-4 md:p-10 overflow-y-auto flex flex-wrap gap-6 rounded-2xl justify-center">
        {loading ? (
          <Spinner loading={loading} />
        ) : filter ? (
          filteredPets.map((pet) => <PetListing key={pet.id} pet={pet} />)
        ) : (
          pets.map((pet) => <PetListing key={pet.id} pet={pet} />)
        )}
      </div>
    </div>
  );
};

export default ShopPage;
