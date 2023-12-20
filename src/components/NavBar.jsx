import { HashLink as Link } from "react-router-hash-link";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  const handleSetActive = (to) => {
    console.log(to);
  };

  return (
    <div className="flex justify-between w-full fixed text-white px-10 z-[10000] md:px-32 py-4">
      <div>
        <Link to="/">
          <h2 className="font-Signature text-[20px]">Mahlet Seleshi</h2>
        </Link>
      </div>

      {/* Desktop navigation */}
      <div className="hidden md:flex items-center gap-10">
        <Link
          activeClass="active"
          to="#Home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
          onSetActive={handleSetActive}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="#About"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
          onSetActive={handleSetActive}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="#Portfolio"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
          onSetActive={handleSetActive}
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="#Experience"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
          onSetActive={handleSetActive}
        >
          Experience
        </Link>
        <Link
          activeClass="active"
          to="#Contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
          onSetActive={handleSetActive}
        >
          Contact
        </Link>
      </div>

      {/* Mobile navigation */}
      <div className="md:hidden z-1 relative">
        <div onClick={toggleNavBar} className="z-100">
          {isOpen ? <AiOutlineClose fill="black"  size={30} className="absolute top-[10px] right-[10px] z-[10000]"/> : <CiMenuFries size={30} />}
        </div>

        {isOpen && (
          <>
            <div
              className="absolute h-[50%] w-full inset-0 bg-black opacity-50 z-[10000]"
              onClick={toggleNavBar}
            ></div>
            <ul className="fixed top-0 left-0 w-full text-2xl text-[#0F2A3D] space-y-6 h-[50%] flex flex-col items-center justify-center bg-Yellow">
              <Link
                to="#Home"
                onClick = {toggleNavBar}
                >
                Home
              </Link>
              <Link
                to="#About"             
                onClick = {toggleNavBar}>
                About
              </Link>
              <Link
                to="#Portfolio"   
                onClick = {toggleNavBar}>
                Portfolio
              </Link>
              <Link
                to="#Experience"
                onClick = {toggleNavBar}>
                Experience
              </Link>
              <Link
                to="#Contact"       
                onClick = {toggleNavBar}>
                Contact
              </Link>
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
