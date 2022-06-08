import React from "react";
import { useState } from "react";
import Logo from "../assets/logoV2.png";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {

    const [toggle, setToggle] = useState(false);

    const handleClick = () => setToggle(!toggle); 
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        {" "}
        <img src={Logo} alt="Logo image" style={{ width: "70px" }} />
      </div>

      {/* Menu */}
      <div className="hidden md:flex">
        <ul className="flex">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!toggle ? <FaBars></FaBars>: <FaTimes></FaTimes>}
      </div>

      {/* Mobile menu */}
      <ul className={!toggle ? 'hidden': "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Work</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>

        {/* Social icons */}
      <div className="hidden"></div>
    </div>
  );
}

export { Navbar };
