import { HashLink as Link} from "react-router-hash-link";


const NavBar = () => {

  const handleSetActive = (to) => {
    console.log(to);
  };

  return (
    <div className="flex justify-between w-full h-screen fixed text-white px-32 py-4">
      <div>
       <Link to="/"><h2 className="font-Signature text-[20px]">Mahlet Seleshi</h2></Link> 
      </div>

      <div>
        <ul className="flex items-center gap-10">
          <li className="hover:text-Yellow duration-300"></li>
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
          <li className="hover:text-Yellow duration-300">
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
          </li>
          <li className="hover:text-Yellow duration-300">
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
          </li>
          <li className="hover:text-Yellow duration-300">
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
          </li>
          <li className="hover:text-Yellow duration-300">
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
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
