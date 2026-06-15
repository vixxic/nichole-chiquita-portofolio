import "./App.css";
import { useEffect, useState } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import AboutMe from "./sections/AboutMe";
import Project from "./sections/Project";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="app">
        <Home />
        <AboutMe />
        <Project />
        <Contact />
      </div>
    </div>
  );
}

export default App;
