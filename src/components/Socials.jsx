import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";




const Socials = () => {


    const links =[
        {
            id: 1,
            child:(
             <> 
            Linkedin <FaLinkedin size={30} fill="black" />
            </>
            ),
            href: "https://www.linkedin.com/in/mahletseleshi",
            style: "rounded-tr-m"
        },

        {
            id: 2,
            child:(
             <> 
            Github <FaGithub size={30} fill="black"/>
            </>
            ),
            href: "https://github.com/mahletseleshi",
        },

        {
            id: 3,
            child:(
             <> 
            Email <HiOutlineMail size={30} fill="black"/>
            </>
            ),
            href: "mailto: mahletseleshi224@gmail.com",
       
        },

        {
            id: 4,
            child:(
             <> 
            Resume <BsFillPersonLinesFill size={30} />
            </>
            ),
            href: "./MahletSeleshi.pdf",
            style: "rounded-tr-m",
            download: true,
        }
    ]



    
  return (
    <div className=" hidden md:flex top-[35%] left-[0] fixed z-50 text-black  bg-[#FFEFCE] ">
         <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-[#FFEFCE]" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-black"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Socials
