import about from "../assets/About.png";

const About = () => {
  return (
    <div className="flex flex-col  relative items-center justify-center w-full my-24 px-32">
      <h1 className="text-[32px]">ABOUT</h1>
      <h1 className="text-[70px] absolute -top-6 text-black/20">ABOUT</h1>
      <div className="flex items-center justify-between ">
        <div className="w-[50%]">
          <img src={about} alt="about" />
        </div>

        <div className="w-[50%] flex flex-col items-center justify-center">
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

          <button className="bg-Yellow px-4 py-2 rounded-md mt-6 border-2 border-black">Download Resume</button>
        </div>
      </div>
    </div>
  );
};

export default About;
