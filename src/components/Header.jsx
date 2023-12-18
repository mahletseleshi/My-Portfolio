import {useTypewriter, Cursor} from "react-simple-typewriter"


import { FaArrowRightLong } from "react-icons/fa6";
import header from "../assets/Header.png";

const Header = () => {
 const[text] = useTypewriter({
  words:["Front End Developer", " UI/UX Designer"],
  loop:{},
  typeSpeed: 80,
  deleteSpeed:30,
 }) 


  return (
    <div id="Header" className="overflow-hidden bg-gradient-to-r box-border  w-full h-screen from-[#0F2A3D] flex justify-between items-center  px-4 md:px-32 to-[#3F5564] text-white">
      <div className="flex flex-col space-y-5 items-center justify-center md:justify-start md:items-start">
        <p className="text-[25px] md:text-[15px]">Hello, I am Mahlet👋 </p>
        <h1 className="text-5xl w-[70%] text-center md:text-left md:text-[65px] md:w-[90%] md:leading-[1.1] font-semibold">
          I am a <span className="text-Yellow ">{text}</span> <span><Cursor cursorStyle="/"/></span>
        </h1>
        <p className="w-[70%] text-[20px] md:text-[14px] text-center md:text-left">
          An experienced frontend developer with enthusiastic perception of
          making the internet an intuitive and interactive place.
        </p>
        <button className="flex gap-2 justify-center items-center border-2 px-4 py-2 text-Yellow border-Yellow">
          EXPLORE PORTFOLIO
          <FaArrowRightLong fill="Yellow" />
        </button>
      </div>
      <div className= " hidden md:block md:mr-24">
        <img src={header} alt="header" />
      </div>
    </div>
  );
};

export default Header;
