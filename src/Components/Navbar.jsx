import React, { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className={`w-full text-3xl font-bold text-[#00df9a] ${nav ? 'invisible' : ''}`}>RANTA,</h1>
      <ul className="hidden md:flex ">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? (
          <AiFillCloseCircle size={30} />
        ) : (
          <HiOutlineMenuAlt3 size={30} />
        )}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 h-full w-[30%] border-r-gray-900 bg-[#00300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-5">RANTA,</h1>
        <ul className="uppercase p-4 ">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Resources</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
