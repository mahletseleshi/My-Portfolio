import { HashLink as Link } from "react-router-hash-link";
import { CiMenuFries } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
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
    <div className="flex justify-between w-full fixed text-white px-10 md:px-32 py-4">
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
      <div className="md:hidden">
        <div onClick={toggleNavBar}>
          {isOpen ? <TfiClose /> : <CiMenuFries />}
        </div>

        {isOpen && (
          <>
            <div
              className="fixed inset-0 bg-black opacity-50 z-40"
              onClick={toggleNavBar}
            ></div>
            <ul className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-Yellow/30">
              <Link
                to="#Home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
                onSetActive={handleSetActive}
                onClick={toggleNavBar}
              >
                Home
              </Link>
              <Link
                to="#About"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
                onSetActive={handleSetActive}
                onClick={toggleNavBar}
              >
                About
              </Link>
              <Link
                to="#Portfolio"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
                onSetActive={handleSetActive}
                onClick={toggleNavBar}
              >
                Portfolio
              </Link>
              <Link
                to="#Experience"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
                onSetActive={handleSetActive}
                onClick={toggleNavBar}
              >
                Experience
              </Link>
              <Link
                to="#Contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
                onSetActive={handleSetActive}
                onClick={toggleNavBar}
              >
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
