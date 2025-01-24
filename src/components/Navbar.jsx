import React from "react";
import { Link } from "react-router-dom";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoSearchOutline, IoHeartOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import "./styles.css";
const Navbar = () => {
  const currentUser = false;

  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        <div className="flex item-center md:gap-16">
          {/* Right Side*/}
          <Link to="/">
            <HiMiniBars3CenterLeft className="w-6 h-6" />
          </Link>
          <div className="relative sm:w-72 w-40 space-x-2">
            <IoSearchOutline className="absolute inline-block left-3 inset-y-2" />
            <input
              type="text"
              placeholder="Search here..."
              className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"
            ></input>
          </div>
        </div>
        {/* Right Side*/}
        <div className="relative flex items-center md:space-x-3 space-x-2">
          <div>
            {currentUser ? <>User</> : <Link to="/login"><FaUser className="size-6"/></Link>}
          </div>

          <button className="hidden sm:block">
            <IoHeartOutline className="size-6"></IoHeartOutline>
          </button>
          <Link
            to="/cart"
            className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm"
          >
            <IoMdCart className="" />
            <span className="text-sm font-semibold sm:ml-1">0</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
