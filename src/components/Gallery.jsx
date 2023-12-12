import Kuraz from "../assets/Kuraz.png"
import Netflix from "../assets/Netflix.png"
import Planton from "../assets/Planton.png"

const Gallery = () => {
  return (
    <div className="flex mx-auto gap-10 w-[20%] relative items-center  mt-[-40px]  shadow-xl justify-center">
      <img src={Kuraz} alt="Kuraz" className="" />
      <img src={Netflix} alt="Netflix" />
      <img src={Planton} alt="Planton" />
      <img src={Kuraz} alt="Kuraz" />
    </div>
  )
}

export default Gallery
