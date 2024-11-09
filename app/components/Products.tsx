"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import img1 from '../../app/assets/image (8).png';
import img2 from '../../app/assets/image (3).png';
import img3 from '../../app/assets/image (9).png';
import img4 from '../../app/assets/image (4).png';
import img5 from '../../app/assets/image (5).png';
import img6 from '../../app/assets/image (6).png';

const products = [
  {
    image: img1,
    title: "G3X Touch™ for Experimental Aircraft GDU 450",
    price: "৳ 1,400",
  },
  {
    image: img2,
    title: "GNC 215 NAV/COMM",
    price: "৳ 2,400",
  },
  {
    image: img3,
    title: "GARMIN GTR 205",
    price: "৳ 3,900",
  },
  {
    image: img4,
    title: "D2™ Mach 1 PRO",
    price: "৳ 1,400",
  },
  {
    image: img5,
    title: "BOSE A30 - XLR5 PLUG, STRAIGHT CORD - WITHOUT",
    price: "৳ 1,400",
  },
  {
    image: img5,
    title: "Airbus A319 – G-EZII",
    price: "৳ 1,400",
  },
];

const ProductCard = ({ image, title, price }: { image: string; title: string; price: string }) => (
  <div className="bg-white flex flex-col items-center h-[378px] w-[240px] mx-2">
    <Image src={image} alt={title} width={200} height={200} />
    <h2 className="text-blue-500">{title}</h2>
    <p>{price}</p>
    <button className="bg-blue-500 py-2 px-11 text-sm text-white rounded-sm">Add to Cart</button>
  </div>
);

const Products = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: (
      <div className="absolute left-[-40px] top-[50%] transform -translate-y-[50%] text-white text-2xl cursor-pointer">
        &#8592;
      </div>
    ),
    nextArrow: (
      <div className="absolute right-[-40px] top-[50%] transform -translate-y-[50%] text-white text-2xl cursor-pointer">
        &#8594;
      </div>
    ),
  };

  return (
    <div className="w-full h-[548px] bg-custom-bg pt-9 relative">
      <h2 className="container mx-auto pb-9 px-4 md:px-[38px] text-2xl text-[#0487E2] font-bold">Featured Products</h2>
      <div className="pl-4 sm:pl-8 lg:pl-[72px] overflow-hidden flex flex-col gap-2 relative">
        <Slider {...settings}>
          {products.map((product, index) => (
            <ProductCard key={index} image={product.image} title={product.title} price={product.price} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Products;
