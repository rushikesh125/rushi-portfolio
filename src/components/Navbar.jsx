import React from "react";
import Drawer from "./Drawer";

const Navbar = () => {
  return (
    <>
      <div className="w-full flex justify-between py-5 px-10 md:py-4 md:px-12">
        <h1>R</h1>
        <Drawer/>
      </div>
    </>
  );
};

export default Navbar;
