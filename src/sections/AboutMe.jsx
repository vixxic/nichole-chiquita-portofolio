import "../styles/AboutMe.css";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { SiGsap } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

function AboutMe() {
  return (
    <div className="about-me-section section poppins-regular">
      <div className="about-me-img-con">
        <img></img>
      </div>

      <div className="about-me-tlt-des-con">
        <h1 className="poppins-medium">About Me</h1>

        <p className="about-me-des poppins-regular">
          Saya adalah siswa RPL yang berfokus pada Front-End Development. Saya
          menggunakan HTML, CSS, JavaScript, dan React untuk membangun website
          responsif dan interaktif.
        </p>

        <p className="tech-stack-tlt">Tech Stack</p>
        <div className="tect-stack-con poppins-regular">
          <div className="skill">
            <FaHtml5 size={30} color="#E55327" />
            HTML
          </div>
          <div className="skill">
            <FaCss3Alt size={30} color="#1B73BA" />
            CSS
          </div>
          <div className="skill">
            <IoLogoJavascript size={30} color="#F7DF1E" />
            JavaScript
          </div>
          <div className="skill">
            <FaReact size={30} color="#83E2FC" />
            React
          </div>
          <div className="skill">
            <SiGsap size={30} color="#0AC741" />
            GSAP
          </div>
          <div className="skill">
            <FaGithub size={30} color="" />
            GitHub
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
