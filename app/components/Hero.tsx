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
import { FaChevronRight } from "react-icons/fa";


const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-1 md:-right-8 top-1/2 transform -translate-y-1/2 text-lg md:text-2xl text-[#BEBEBE] hover:text-[#226dc4]">
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
    nextArrow: <NextArrow />,
  };

  return (
    <div className="container mx-auto pt-5 relative">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="flex justify-center">
            <div className="w-full flex justify-center">
              <Image
                src={image}
                alt={`Carousel image ${index + 1}`}
                className="rounded-md object-cover text-center"
                width={1296}
                height={478}
                sizes="(max-width: 768px) 90vw, (max-width: 1024px) 80vw, 1296px"
                style={{ width: "100%", height: "auto", maxWidth: "1296px", maxHeight: "478px" }}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
