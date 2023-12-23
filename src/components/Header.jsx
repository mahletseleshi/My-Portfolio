import { useTypewriter, Cursor } from "react-simple-typewriter";
import { HashLink as Link} from "react-router-hash-link";
import header from "../assets/Header.png";


const Header = () => {
  const [text] = useTypewriter({
    words: ["Front End Developer", " UI/UX Designer"],
    loop: {},
    typeSpeed: 80,
    deleteSpeed: 30,
  });

  return (
    <div
      id="Header"
      className="overflow-hidden bg-gradient-to-r  w-full h-screen from-[#0F2A3D] flex justify-between items-center md:px-32 to-[#3F5564] text-white"
    >
      <div className="flex flex-col space-y-5 items-center justify-center mx-auto md:justify-start md:items-start w-[90%] basis-[60%]">
        <p className="text-[25px] md:text-[15px]">Hello, I am Mahlet👋 </p>
        <h1 className="text-5xl w-[70%] text-center md:text-left md:text-[65px] md:w-[90%] md:leading-[1.1] font-semibold">
          I am a <span className="text-Yellow ">{text}</span>{" "}
          <span>
            <Cursor cursorStyle="/" />
          </span>
        </h1>
        <p className="w-[70%] text-[18px] md:text-[14px] text-center md:text-left">
          An experienced frontend developer with enthusiastic perception of
          making the internet an intuitive and interactive place.
        </p>
      <button className="relative border-2 border-Yellow bg-transparent py-2.5 px-5 font-medium uppercase text-Yellow transition-colors before:absolute before:left-0 before:top-0 before:z-[-100000] before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-Yellow before:transition-transform before:duration-500 before:content-[''] hover:text-black hover:z-[1000] before:hover:scale-x-100">
      <Link
            activeClass="active"
            to="#Portfolio"
            spy={true}
            smooth={true}
            offset={100}
            duration={1000}
      
          >
          EXPLORE PORTFOLIO
          {/* <FaArrowRightLong fill="Yellow" className="hover:fill-black hover:group-rotate-90"/> */}
          </Link> 
        </button>
      
      </div>
      <div className=" hidden md:block md:mr-24 basis-[40%]">
        <img src={header} alt="header" />
      </div>
    </div>
  );
};

export default Header;
