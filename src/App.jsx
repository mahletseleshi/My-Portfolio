import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Socials from "./components/Socials";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect } from "react";
import { Hourglass } from "react-loader-spinner";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex items-center w-full h-screen justify-center bg-[#0F2A3D]">
          <Hourglass
            visible={true}
            height="80"
            width="80"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={["#F8CF2B", "#72a1ed"]}
          />
        </div>
      ) : (
        <Router>
          <NavBar />
          <Header />
          <Gallery />
          <Socials />
          <About />
          <Portfolio />
          <Experience />
          <Contact />
        </Router>
      )}
    </div>
  );
}

export default App;
