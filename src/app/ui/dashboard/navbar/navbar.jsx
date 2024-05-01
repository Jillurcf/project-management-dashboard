"use client";
import "daisyui/dist/full.css";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {

  return (
    <div className="max-w-screen-xl mx-auto py-8">
      
     <div className="flex justify-between">
     <div className="join">
        <input className="input input-bordered join-item" placeholder="Email" />
        <button className="btn join-item rounded-r-full"><FaSearch></FaSearch></button>
      </div>
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <Image
              height={"50"}
              width={"50"}
              alt=""
              src="/profile-03-12-23.png"
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
     </div>
    </div>
  );
};

export default Navbar;
