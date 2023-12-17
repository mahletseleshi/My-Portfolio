import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Socials from "./components/Socials";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
