import "../styles/Navbar.css";
import { useEffect, useState } from "react";
import OrangeBtn from "./OrangeBtn";
import { AiOutlineMoon } from "react-icons/ai";
import { FiSun } from "react-icons/fi";

function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`navbar-con poppins-semibold ${scrolled ? "scrolled" : ""}`}
    >
      <div className="nav-content">
        <div className="logo-togle-con">
          <h1 className="logo">NCC</h1>
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              className="theme-btn"
              onClick={() => {
                setDarkMode(!darkMode);
              }}
            >
              {darkMode ? (
                <FiSun className="theme-icon" />
              ) : (
                <AiOutlineMoon className="theme-icon" />
              )}
            </button>
          </span>
        </div>

        <div className="nav-links">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about-me">About Me</a>
            </li>
            <li>
              <a href="#project">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>

          <OrangeBtn text="Download CV" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
