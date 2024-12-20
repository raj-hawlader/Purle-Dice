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
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { StaticImageData } from 'next/image';

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

const ProductCard = ({ image, title, price }: { image: string | StaticImageData; title: string; price: string }) => (
  <div className="bg-white flex flex-col items-center justify-between p-3 h-[378px] w-[240px] mx-2">
    <Image src={image} alt={title} width={200} height={200} />
    <div className="space-y-1">
      <h2 className="text-[#262626] text-center font-exo font-semibold text-sm md:text-base">{title}</h2>
      <p className="text-[#0487E2] text-lg md:text-xl text-center font-exo">{price}</p>
      <button className="bg-[#0487E2] py-3 w-[216px] text-sm font-exo text-white rounded-sm font-semibold hover:bg-[#226dc4]">
        Add to Cart
      </button>
    </div>
  </div>
);

const Products = () => {
  const sliderRef = React.useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="w-full">
      <div className="container mx-auto max-w-[1440px] bg-custom-bg flex flex-col justify-center gap-12 h-[548px] px-5 md:px-[38px]">

        <div className="flex items-center justify-between">
          <h2 className="text-xl md:text-2xl text-[#0487E2] font-semibold font-exo">Featured Products</h2>
          
          <div className="flex gap-4">
            <button
              className="text-[#BEBEBE] p-2 rounded-full hover:text-[#0487E2]"
              onClick={() => sliderRef.current?.slickPrev()}>
              <FaChevronLeft className="text-lg md:text-xl" />
            </button>
            
            <button
              className="text-[#BEBEBE] p-2 rounded-full hover:text-[#0487E2]"
              onClick={() => sliderRef.current?.slickNext()}>
              <FaChevronRight className="text-lg md:text-xl" />
            </button>
          </div>
        </div>
        
        <div className="overflow-hidden">
          <Slider ref={sliderRef} {...settings}>
            {products.map((product, index) => (
              <ProductCard key={index} image={typeof product.image === 'string' ? product.image : product.image.src} title={product.title} price={product.price} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Products;
