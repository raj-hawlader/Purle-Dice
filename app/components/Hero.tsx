"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import img1 from '../../app/assets/image (1).png';
import img2 from '../../app/assets/image (1).png';
import img3 from '../../app/assets/image (1).png';
import img4 from '../../app/assets/image (1).png';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-[-40px] top-[50%] transform -translate-y-1/2 text-2xl text-[#BEBEBE] hover:text-[#0487E2]">
      <FaChevronLeft />
    </button>
  );
};

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-[-40px] top-[50%] transform -translate-y-1/2 text-2xl text-[#BEBEBE] hover:text-[#0487E2]">
      <FaChevronRight />
    </button>
  );
};

const Hero = () => {
  const images = [img1, img2, img3, img4];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="container mx-auto px-4 pt-5 relative">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="w-full">
            <Image
              src={image}
              alt={`Carousel image ${index + 1}`}
              className="w-full h-auto rounded-md"/>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;