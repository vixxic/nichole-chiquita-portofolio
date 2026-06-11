import "../styles/Navbar.css";
import { useEffect, useState } from "react";
import OrangeBtn from "./OrangeBtn";
import { AiOutlineMoon } from "react-icons/ai";
import { CiSun } from "react-icons/ci";

function Navbar() {
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
            <AiOutlineMoon size={40} color="#674022" />
          </span>
        </div>

        <div className="nav-links">
          <ul>
            <li>Home</li>
            <li>About Me</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>

          <OrangeBtn text="Download CV" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
