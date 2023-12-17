import { useState } from "react";
import kuraz from "../assets/Kuraz.png"
import { FaArrowLeft ,FaArrowRight } from "react-icons/fa";

const Portfolio = () => {
  const items = [
    {
      id: 1,
      image: "url(../assets/Kuraz)",
      title: "Kuraz Exam",
      Description:
        "A website made for movie enthusiasts. It came into life using Tailwind CSS and React JS.",
      Demo: "https://www.w3schools.com/cssref/css3_pr_transform-origin.php",
      code: "https://tailwindcss.com/docs/rotate",
    },

    {
      id: 2,
      image: "url(../assets/Kuraz)",
      title: "Kuraz Exam",
      Description:
        "A website made for movie enthusiasts. It came into life using Tailwind CSS and React JS.",
      Demo: "https://www.w3schools.com/cssref/css3_pr_transform-origin.php",
      code: "https://tailwindcss.com/docs/rotate",
    },

    {
      id: 3,
      image: "url(../assets/Kuraz)",
      title: "Kuraz Exam",
      Description:
        "A website made for movie enthusiasts. It came into life using Tailwind CSS and React JS.",
      Demo: "https://www.w3schools.com/cssref/css3_pr_transform-origin.php",
      code: "https://tailwindcss.com/docs/rotate",
    },

    {
      id: 4,
      image: "url(../assets/Kuraz)",
      title: "Kuraz Exam",
      Description:
        "A website made for movie enthusiasts. It came into life using Tailwind CSS and React JS.",
      Demo: "https://www.w3schools.com/cssref/css3_pr_transform-origin.php",
      code: "https://tailwindcss.com/docs/rotate",
    },
  ];

  const [currentItem, setCurrentItem] = useState(0);

  const nextItem = () => {
    setCurrentItem((prevItem) =>
      prevItem === items.length - 1 ? 0 : prevItem + 1
    );
  };

  const prevItem = () => {
    setCurrentItem((prevItem) =>
      prevItem === 0 ? items.length - 1 : prevItem - 1
    );
  };
  

  return (
    <div id="Portfolio" className="relative flex-col items-center justify-center h-screen ">
      <div className="absolute inset-0 bg-[#0F2A3D] -skew-y-6 w-full h-full"></div>
      <div className="relative flex flex-col items-center space-y-24 justify-center">
        <div className="pt-[50px]">
        <h1 className="text-[32px]  flex items-center justify-center text-Yellow mt-10 z-10">PORTFOLIO</h1>
        <h1 className="text-[70px] pt-[50px] group flex items-center justify-center absolute ml-[-100px]   text-Yellow/20 -top-7 mt-10 text-Yellow z-10">
          PORTFOLIO
        </h1>
        </div>

        <div className="flex items-center justify-center w-full gap-5 text-white">
            <div className="hover:scale-90 duration-500">
                <img src={kuraz} alt="kuraz"></img>
                <div>
                    <h1 className="text-[28px] font-thin my-2">{items[currentItem].title}</h1>
                    <p className="text-[12px] font-thin mb-2">{items[currentItem].Description}</p>
                </div>
                <div className="flex gap-4">
                   <a href={items[currentItem].Demo} target="_blank" rel="noopener noreferrer" className="border-Yellow border-2 px-6 py-1 text-Yellow hover:bg-Yellow duration-200 hover:text-black">Code</a>
                    <a href={items[currentItem].Demo} target="_blank" rel="noopener noreferrer"className="bg-Yellow  text-black px-6 py-1 ">Demo </a>
                </div>
            </div>


             <div>
                <img src={kuraz} alt="kuraz"></img>
                <div>
                    <h1 className="text-[28px] font-thin my-2">NetFlix Clone</h1>
                    <p className="text-[12px] font-thin mb-2">A website made for movie enthusiasts. It came into life using Tailwind CSS and React JS.</p>
                </div>
                <div className="flex gap-4">
                    <button className="border-Yellow border-2 px-6 py-1 text-Yellow">Code</button>
                    <button className="bg-Yellow  text-black px-6 py-1">Demo</button>
                </div>
            </div>

            <div>
                <img src={kuraz} alt="kuraz"></img>
                <div>
                    <h1 className="text-[28px] font-thin my-2">NetFlix Clone</h1>
                    <p className="text-[12px] font-thin mb-2">A website made for movie enthusiasts. It came into life using Tailwind CSS and React JS.</p>
                </div>
                <div className="flex gap-4">
                    <button className="border-Yellow border-2 px-6 py-1 text-Yellow">Code</button>
                    <button className="bg-Yellow  text-black px-6 py-1">Demo</button>
                </div>
            </div> 


        </div>
           <div className="flex gap-5 cursor-pointer ">
        <button onClick={prevItem}><FaArrowLeft size={30} className="border-2  border-black rounded-full p-2 hover:bg-Yellow duration-300 hover:border-none"/></button>
        <button onClick={nextItem}><FaArrowRight size={30} className="bg-Yellow rounded-full p-2 hover:bg-black hover:text-white"/></button>
        </div>
       
      </div>
    </div>
  );
};

export default Portfolio;
