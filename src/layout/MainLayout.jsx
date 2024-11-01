import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Mainlayout = () => {
  return (
    <>
      <div className="h-screen flex flex-col">
        <Navbar />
        <div >
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Mainlayout;
