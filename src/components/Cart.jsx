import React, { useContext, useEffect, useState } from "react";
import BirdImage from "../assets/images/dummy-bird.png";
import { MdDeleteOutline } from "react-icons/md";
import { CartItemContext } from "../layout/Mainlayout";

const Cart = () => {
  const { cartItem } = useContext(CartItemContext);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const calculateTotal = () => {
      const total = cartItem.reduce((acc, item) => {
        return acc + Number(item.pet.price) * Number(item.quantity);
      }, 0);
      setTotalPrice(total);
    };

    calculateTotal();
  }, [cartItem]);

  return (
    <>
      <div className=" bg-purple-800 rounded-xl p-6 absolute right-36 top-28 w-96 flex flex-col gap-4 ">
        <div className="font-secBold mb-4 text-white border-double border-purple-400 border-b  p-4">
          Cart
        </div>

        <div className="cart-scroll h-44 overflow-x-auto flex flex-col gap-2 ">
          {cartItem.length === 0 ? (
            <div className="bg-purple-600 h-full flex justify-center items-center">
              <div className="text-center font-secMedium text-white text-xs">
                😊 Your cart is waiting to be filled
              </div>
            </div>
          ) : (
            cartItem.map((item) => (
              <div
                key={item.pet.id}
                className="flex gap-4 justify-between items-center bg-purple-700 p-2 text-white font-secMedium"
              >
                <div className="rounded-md overflow-hidden h-full">
                  <img
                    src={item.pet.image}
                    alt="bird-ig"
                    className="w-24 h-16"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <p>{item.pet.name}</p>
                  <div className="flex justify-between items-center gap-3 w-56">
                    <div className="flex gap-2">
                      <p className="text-purple-200">{item.pet.price}</p>
                      <p> X {item.quantity} </p>
                    </div>
                    <div className="font-secBold">
                      ${Number(item.pet.price) * Number(item.quantity)}
                    </div>
                    <div>
                      <MdDeleteOutline />
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="font-secBold flex flex-col gap-2 ">
          <div className=" bg-purple-900 flex rounded-lg justify-between items-center p-4 tracking-wide text-white">
            <div className="text-extra-small text-purple-300">TOTALS</div>
            <div>${totalPrice}</div>
          </div>
          <div className="bg-white flex justify-center p-4 rounded-lg cursor-pointer tracking-widest">
            CHECKOUT
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
