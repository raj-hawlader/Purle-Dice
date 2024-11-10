"use client";
import React, { useState } from "react";
import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagram, FaTwitter, FaSearch, FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import logo from "../../app/assets/Asset 1@4x 1.png";
import { LuUser2 } from "react-icons/lu";
import { IoMdMenu } from "react-icons/io";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      {/* 1st part */}
      <div className="bg-[#0363CA] text-white w-full h-[30px] p-2 md:p-0">
        <div className="container mx-auto flex justify-between items-center md:px-[38px] h-full">
          <div className="flex items-center">
            <h3 className="text-xs md:text-sm font-inter">
              Hotline: <span className="font-semibold pl-1">+0186-1123325</span>
            </h3>
          </div>
          <div className=" flex items-center gap-12">
            <h3 className="text-xs md:text-sm font-inter">Contact Us</h3>
            <div className="flex gap-2">
              <IoLogoFacebook className="w-4 h-4 md:w-5 md:h-5 cursor-pointer" />
              <FaInstagram className="w-4 h-4 md:w-5 md:h-5 cursor-pointer" />
              <FaTwitter className="w-4 h-4 md:w-5 md:h-5 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* 2nd part */}
      <div className="w-full h-20 flex items-center justify-between container mx-auto px-4 md:px-8 relative">

        <div className="flex items-center">
          <Image src={logo} alt="Company Logo" width={173} height={50} />
        </div>



          <button
            className="md:hidden text-[#0487E2] p-5"
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <IoMdMenu className="text-2xl" />
          </button>

          <div className="hidden md:flex md:gap-6 items-center text-[#263746] text-sm font-exo">
            <a href="#" className="hover:text-[#0363CA]">Home</a>
            <a href="#" className="hover:text-[#0363CA]">Shop</a>
            <a href="#" className="hover:text-[#0363CA]">Products</a>
            <a href="#" className="hover:text-[#0363CA]">About Us</a>
            <a href="#" className="hover:text-[#0363CA]">Blog</a>
          </div>

          <div className="relative flex items-center border border-gray-300 rounded-md px-3 ml-4">
            <input
              type="text"
              placeholder="Search Products"
              className="outline-none text-sm px-1 md:px-4 w-full lg:w-[416px] h-12 font-exo"
            />
            <button className="absolute right-0 flex items-center justify-center bg-[#0487E2] h-12 w-12 rounded-r-md text-white cursor-pointer">
              <FaSearch />
            </button>
          </div>


        <div className="hidden md:flex items-center gap-6 text-[#0487E2]">
          <FaShoppingCart className="w-6 h-6 cursor-pointer" />
          <LuUser2 className="w-6 h-6 cursor-pointer" />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="bg-white w-full h-screen flex flex-col gap-10 p-5 font-exo text-[#263746] ">
          <div className="flex gap-3 items-center justify-evenly text-[#0487E2] border-b-2 pb-4">
                <FaShoppingCart className="w-6 h-6" />
                <LuUser2 className="w-6 h-6" />
            </div>
          <div className="flex flex-col gap-6 items-center justify-center ">
            <a href="#" className="text-lg hover:text-[#0363CA] font-semibold ">Home</a>
            <a href="#" className="text-lg hover:text-[#0363CA] font-semibold">Shop</a>
            <a href="#" className="text-lg hover:text-[#0363CA] font-semibold">Products</a>
            <a href="#" className="text-lg hover:text-[#0363CA] font-semibold">About Us</a>
            <a href="#" className="text-lg hover:text-[#0363CA] font-semibold">Blog</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
