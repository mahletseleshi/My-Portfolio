import Adobe from "../assets/Adobe Illustrator.png";
import Indesign from "../assets/Adobe InDesign.png";
import Canva from "../assets/Canva.png";
import CSS3 from "../assets/CSS3.png";
import GitHub from "../assets/GitHub.png";
import HTML from "../assets/HTML.png";
import JavaScript from "../assets/JavaScript.png";
import Next from "../assets/Next JS.png";
import Photoshop from "../assets/Photoshop.png";
import React from "../assets/React.png";
import Tailwind from "../assets/Tailwind CSS.png";
import Wordpress from "../assets/Wordpress.png";
import Figma from "../assets/Figma.png";
import Framer from "../assets/Framer.png";
import XD from "../assets/XD.png";

import { IoBagHandleSharp } from "react-icons/io5";

const Experience = () => {
  return (
    <div
      id="Experience"
      className="mt-44 flex flex-col overflow-x-hidden  relative justify-center w-full my-24  px-4 md:px-32 gap-12"
    >
      <div className="flex flex-col items-center justify-between">
        <h1 className=" text-[32px] text-[#0F2A3D]">EXPERIENCE</h1>
        <h1 className="text-[70px] absolute -top-6 text-black/20">
          EXPERIENCE
        </h1>
      </div>

      <div className="flex flex-col items-center md:flex-row md:items-start justify-between">
        <div className="flex flex-col gap-8 mt-10 w-[70%] md:w-[30%]">
          <div className="flex items-center justify-between ">
            <div>
              <h1 className="text-[19px]">Front End Developer</h1>
              <div className="text-[10.5px] flex items-center justify-between">
                <p>Kuraz Technologies</p>
                <p>2020-PRESENT</p>
              </div>
            </div>

            <div>
              <IoBagHandleSharp
                size={30}
                fill="#F8CF2B"
                className="bg-[#0f2a3d] rounded-full w-12 h-12 p-[10px]"
              />
            </div>

            <div>
              <p>Present</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-[19px]">Front End Developer</h1>
              <div className="text-[10.5px] flex items-center justify-between">
                <p>Kuraz Technologies</p>
                <p>2022-PRESENT</p>
              </div>
            </div>

            <div>
              <IoBagHandleSharp
                size={30}
                fill="#F8CF2B"
                className="bg-[#0f2a3d] rounded-full w-12 h-12 p-[10px]"
              />
            </div>

            <div>
              <p>Present</p>
            </div>
          </div>

          <div className="flex items-center justify-between ">
            <div>
              <h1 className="text-[19px]">UI/UX Designer</h1>
              <div className="text-[11px] flex items-center justify-between">
                <p>JSDP</p>
                <p>2021-2023</p>
              </div>
            </div>

            <div>
              <IoBagHandleSharp
                size={30}
                fill="#F8CF2B"
                className="bg-[#0f2a3d] rounded-full ml-[20px] w-12 h-12 p-[10px]"
              />
            </div>

            <div>
              <p>2023</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-[19px]">React Developer</h1>
              <div className="text-[11px] flex items-center gap-4 justify-between">
                <p>The Hot platform</p>
                <p>2021-2022</p>
              </div>
            </div>

            <div>
              <IoBagHandleSharp
                size={30}
                fill="#F8CF2B"
                className="bg-[#0f2a3d] rounded-full ml-[14px] w-12 h-12 p-[10px]"
              />
            </div>

            <div>
              <p>20222</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-5 md:mt-10 w-[70%] mt-16 md:w-[40%] ">

          <img src={HTML} alt="" className="hover:scale-75 duration-500" />
          <img src={CSS3} alt="" className="hover:scale-75 duration-500" />
          <img
            src={JavaScript}
            alt=""
            className="hover:scale-75 duration-500"
          />
          <img src={Tailwind} alt="" className="hover:scale-75 duration-500" />
          <img src={React} alt="" className="hover:scale-75 duration-500" />
          <img src={Next} alt="" className="hover:scale-75 duration-500" />
          <img src={Framer} alt="" className="hover:scale-75 duration-500" />
          <img src={GitHub} alt="" className="hover:scale-75 duration-500" />
          <img src={Wordpress} alt="" className="hover:scale-75 duration-500" />
          <img src={Figma} alt="" className="hover:scale-75 duration-500" />
          <img src={XD} alt="" className="hover:scale-75 duration-500" />
          <img src={Adobe} alt="" className="hover:scale-75 duration-500" />
          <img src={Indesign} alt="" className="hover:scale-75 duration-500" />
          <img src={Photoshop} alt="" className="hover:scale-75 duration-500" />
          <img src={Canva} alt="" className="hover:scale-75 duration-500" />
        </div>
      </div>
    </div>
  );
};

export default Experience;
