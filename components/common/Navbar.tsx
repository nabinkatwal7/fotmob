import Link from "next/link";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="w-full sticky top-0 flex flex-row gap-2 items-center justify-evenly p-4 bg-[#1A1A1A] shadow-xl">
      <div className="flex flex-row gap-6 items-center">
        <p className="font-bold">MOBFOT</p>
        <div className="p-inputgroup flex-1">
          <input placeholder="Search" className="p-2 rounded-l-xl" />
          <button className="bg-green-500 rounded-r-xl p-2">
            <FaSearch className="text-xl" />
          </button>
        </div>
      </div>
      <div className="flex flex-row gap-8 items-center">
        <Link href="/#">News</Link>
        <Link href="/#">About</Link>
        <div></div>
        <button className="text-xl">
          <IoSettings />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
