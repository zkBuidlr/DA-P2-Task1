import Link from "next/link";
import React from "react";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="bg-white fixed top-0 w-[100%] z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-2">
        <div className="text-[24px]">BUIDLR</div>

        <div className="hidden md:flex gap-6">
          <Link legacyBehavior href="">
            <a className="hover:text-blue-500" href="#">
              Home
            </a>
          </Link>
          <Link legacyBehavior href="#about">
            <a className="hover:text-blue-500" href="#">
              About
            </a>
          </Link>
          <Link legacyBehavior href="#services">
            <a className="hover:text-blue-500" href="#">
              Services
            </a>
          </Link>
        </div>

        <a
          href="https://twitter.com/BUIDLR_"
          target="_blank"
          className="hidden md:flex bg-blue-500 hover:bg-blue-700
         text-white font-bold py-2 px-4 rounded"
        >
          Twitter
        </a>

        <div className="md:hidden text-[24px]">
          <FiMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
