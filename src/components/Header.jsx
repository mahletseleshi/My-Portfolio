import { FaArrowRightLong } from "react-icons/fa6";
import header from "../assets/Header.png";

const Header = () => {
  return (
    <div id="Header" className="overflow-hidden bg-gradient-to-r box-border  w-full h-screen from-[#0F2A3D] flex justify-between items-center px-32 to-[#3F5564] text-white">
      <div className="flex flex-col space-y-7 justify-start items-start">
        <p>Hello, I am Mahlet👋 </p>
        <h1 className="text-5xl w-[60%] md:text-[65px] md:w-[80%] md:leading-tight font-semibold">
          I am a <span className="text-Yellow">Front End Developer</span>
        </h1>
        <p className="w-[70%]">
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
