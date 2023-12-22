// import { useState } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {items} from "../Constants"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";




const Portfolio = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  

  return (
    <div
      id="Portfolio"
      className="relative  overflow flex-col w-[100%] items-center justify-center h-screen"
    >
      <div className="absolute inset-0 bg-[#0F2A3D] -skew-y-8 w-full h-screen"></div>
      <div className="relative flex flex-col items-center space-y-24 justify-center max-w-[100%] md:max-w-[95%] mx-auto">
        <div className="pt-[50px]">
          <h1 className="text-[32px]  flex items-center justify-center text-Yellow mt-10 z-10">
            PORTFOLIO
          </h1>
          <h1 className="text-[70px] pt-[50px] group flex items-center justify-center absolute ml-[-100px]   text-Yellow/20 -top-7 mt-10 text-Yellow z-10">
            PORTFOLIO
          </h1>
        </div>

        <div className="w-[96%] text-white">
        <Slider {...settings}>
          {items.map((item) => (
            <div key={item.id} className="hover:scale-90 duration-500">
            
              <img src={item.backgroundImg} alt={item.title}className="overflow-x"></img>
              <div>
                <h1 className="text-[28px] font-thin my-2">{item.title}</h1>
                <p className="text-[13px] font-thin mb-2">{item.Description}</p>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <a
                  href={item.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-Yellow border-2 px-6 py-1 text-Yellow hover:bg-Yellow duration-200 hover:text-black"
                >
                  Code
                </a>
                <a
                  href={item.Demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-Yellow hover:cursor-pointer hover:bg-transparent border-2 border-Yellow hover:text-Yellow duration-500 text-black px-6 py-1 "
                >
                  Demo
                </a>
              </div>
            </div>
          ))}
          </Slider>
        </div>
        {/* <div className="flex gap-5 cursor-pointer ">
          <button onClick={prevItem}>
            <FaArrowLeft
              size={30}
              className="border-2  border-black rounded-full p-2 hover:bg-Yellow duration-300 hover:border-none"
            />
          </button>
          <button onClick={nextItem}>
            <FaArrowRight
              size={30}
              className="bg-Yellow rounded-full p-2 hover:bg-black hover:text-white"
            />
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Portfolio;
