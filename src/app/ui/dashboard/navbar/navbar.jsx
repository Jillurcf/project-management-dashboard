"use client";
import "daisyui/dist/full.css";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
const Navbar = () => {

  return (
    <div className="max-w-screen-xl mx-auto py-8">
      
     <div className="flex justify-between">
     <div className="join">
        <input className="input input-bordered join-item" placeholder="...search" />
        <button className="btn join-item rounded-r-full"><FaSearch></FaSearch></button>
      </div>
      <IoIosNotifications />
     </div>
    </div>
  );
};

export default Navbar;
