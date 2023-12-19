import Kuraz from "../assets/Kuraz.png"
import Netflix from "../assets/Netflix.png"
import Planton from "../assets/Planton.png"

const Gallery = () => {
  return (
    <div className="md:flex mx-auto gap-4 w-[39%] relative items-center px-32 mt-[-40px] justify-center hidden">
      <img src={Kuraz} alt="Kuraz" className="shadow-xl" />
      <img src={Netflix} alt="Netflix" className="shadow-xl" />
      <img src={Planton} alt="Planton" className="shadow-xl"/>
      <img src={Kuraz} alt="Kuraz"className="shadow-xl" />
    </div>
  )
}

export default Gallery
