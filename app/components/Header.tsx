"use client";
import React, { useState } from 'react';
import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter, FaSearch, FaShoppingCart } from "react-icons/fa";
import Image from 'next/image';
import logo from '../../app/assets/Asset 1@4x 1.png';
import { LuUser2 } from "react-icons/lu";
import { IoMdMenu } from "react-icons/io";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <header>
        {/* 1st part */}
        <div className="bg-[#0363CA] text-white w-full h-[30px] p-2 md:p-0">
            <div className="container mx-auto flex justify-between items-center md:px-[38px] h-full">
                <div className="flex items-center">
                    <h3 className="text-xs md:text-sm font-inter">
                        Hotline:
                        <span className="font-semibold pl-1">+0186-1123325</span>
                    </h3>
                </div>

                <div className="flex items-center gap-4 md:gap-12">
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
        <div className="w-full h-20 bg-white shadow-md">
            <div className="container mx-auto flex justify-between items-center h-full px-4 md:px-[38px]">
                <div>
                    <Image src={logo} alt="Company Logo" width={173} height={50} />
                </div>

                <button 
                    className="md:hidden text-[#0487E2] p-5" 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <IoMdMenu/> 
                </button>

                {/* for mobile */}
                <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <div className="text-sm flex flex-col items-center space-y-4 font-exo">
                        <a href="#" className="hover:text-[#0487E2] font-semibold">Home</a>
                        <a href="#" className="hover:text-[#0487E2]">Shop</a>
                        <a href="#" className="hover:text-[#0487E2]">Products</a>
                        <a href="#" className="hover:text-[#0487E2]">About Us</a>
                        <a href="#" className="hover:text-[#0487E2]">Blog</a>
                    </div>
                </div>

                {/* for desktop and tablet */}
                <div className="hidden md:flex gap-8 items-center text-[#263746] text-sm font-exo">
                    <a href="#" className="hover:text-[#0363CA]">Home</a>
                    <a href="#" className="hover:text-[#0363CA]">Shop</a>
                    <a href="#" className="hover:text-[#0363CA]">Products</a>
                    <a href="#" className="hover:text-[#0363CA]">About Us</a>
                    <a href="#" className="hover:text-[#0363CA]">Blog</a>
                </div>

                <div className="relative flex items-center border border-gray-300 rounded-md px-3">
                    <input
                        type="text"
                        placeholder="Search Products"
                        className="outline-none text-sm px-4 w-full md:w-[416px] h-12 font-exo"
                    />
                    <button className="absolute right-0 flex items-center justify-center bg-[#0487E2] h-12 w-12 rounded-r-md text-white cursor-pointer">
                        <FaSearch />
                    </button>
                </div>

                <div className="flex items-center gap-6 text-[#0487E2]">
                    <FaShoppingCart className="w-6 h-6 cursor-pointer"/>
                    <LuUser2 className="w-6 h-6 cursor-pointer" />
                </div>
            </div>
        </div>
        
      </header>
    </div>
  );
};

export default Header;
