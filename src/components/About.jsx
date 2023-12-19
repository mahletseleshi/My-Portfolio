import about from "../assets/About.png";
import resume from "../assets/MahletSeleshi.pdf"

const About = () => {
  return (
    <div id="About" className="flex flex-col overflow-hidden px-4  relative items-center justify-center w-full my-24 md:px-32">
      <h1 className="text-[32px]">ABOUT</h1>
      <h1 className="text-[70px] absolute -top-6 text-black/20">ABOUT</h1>
      <div className="  flex flex-col md:flex-row items-center justify-between ">
        <div className=" w-[70%] md:w-[50%]">
          <img src={about} alt="about" />
        </div>

        <div className="w-[70%]  md:w-[50%] flex flex-col items-center justify-center">
          <p className="text-justify">
            Mahlet Seleshi, a seasoned frontend developer with 4+ years
            specializing in React. Proficient in crafting intuitive user
            interfaces, I excel in responsive design, creating seamless web
            experiences. Skilled in architecting robust solutions, I bring a
            blend of creativity and functionality to every project. Committed to
            staying ahead in technology, I am dedicated to pushing the
            boundaries of frontend innovation Throughout my career, I have honed
            my skills in crafting intuitive user interfaces leveraging
            frameworks like Tailwind and React Framer to create visually
            stunning and responsive designs. Additionally, my proficiency in
            integrating frontend components seamlessly with REST APIs has
            contributed to the development of robust and efficient applications.
          </p>

          <a href={resume}
            download= "Resume" className="bg-Yellow px-4 py-2 rounded-md mt-6 border-2 border-black hover:border-Yellow hover:bg-black hover:text-Yellow duration-500">Download Resume</a>
        </div>
      </div>
    </div>
  );
};

export default About;
