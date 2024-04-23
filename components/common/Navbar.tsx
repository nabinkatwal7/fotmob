"use client";
import { useClickOutside, useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import React from "react";
import { FaGlobe, FaMoon, FaSearch, FaUser } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";

const Navbar = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const ref = useClickOutside(() => {
    close();
  });
  return (
    <div className="w-full sticky top-0 flex flex-row gap-2 items-center justify-evenly p-4 bg-[#1A1A1A] shadow-xl">
      <div className="flex flex-row gap-16 items-center">
        <p className="font-bold">MOBFOT</p>
        <div className="p-inputgroup flex">
          <button className="bg-green-600 rounded-l-xl p-2">
            <FaSearch className="text-xl" />
          </button>
          <input placeholder="Search" className="p-2 rounded-r-xl" />
        </div>
      </div>
      <div className="flex flex-row gap-8 items-center">
        <Link href="/#">News</Link>
        <Link href="/#">About</Link>
        <div ref={ref} className="relative flex items-center">
          {opened && (
            <div className="absolute bg-[#1A1a1a] p-4 top-10 rounded-lg flex flex-col gap-2 shadow-xl">
              <div className="flex flex-row gap-2 items-center whitespace-nowrap">
                <FaUser />
                <p>Sign in</p>
              </div>
              <div className="flex flex-row gap-2 items-center whitespace-nowrap">
                <FaMoon />
                <p>Theme</p>
              </div>
              <div className="flex flex-row gap-2 items-center whitespace-nowrap">
                <FaGlobe />
                <p>Language</p>
              </div>
            </div>
          )}
          <button onClick={opened ? close : open} className="text-lg">
            <IoSettings />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
