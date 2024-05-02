"use client";
import "daisyui/dist/full.css";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
const Navbar = () => {

  return (
    <div className="lg:max-w-screen-xl lg:mx-auto lg:py-8">
      
     <div className="lg:flex lg:pl-0 lg:justify-between">
     <div className="join pl-2 lg:pl-0">
        <input className="input input-bordered mx-auto join-item" placeholder="...search" />
        <button className="btn join-item rounded-r-full"><FaSearch></FaSearch></button>
      </div>
      <IoIosNotifications className="hidden lg:inline-block" />
     </div>
    </div>
  );
};

export default Navbar;
