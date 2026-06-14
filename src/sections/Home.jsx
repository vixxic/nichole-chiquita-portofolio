import "../styles/Home.css";
import { useEffect } from "react";
import OrangeBtn from "../components/OrangeBtn";

import gsap from "gsap";

function Home() {
  useEffect(() => {
    gsap
      .timeline()
      .from(".hero-hi", {
        y: 100,
        opacity: 0,
        ease: "power3.out",
      })
      .from(".hero-tlt-des-con h2", {
        y: 100,
        opacity: 0,
        ease: "power3.out",
      })
      .from(".hero-tlt-des-con h1", {
        y: 100,
        opacity: 0,
        ease: "power3.out",
      })
      .from(".home-des", {
        y: 60,
        opacity: 0,
        ease: "power3.out",
      });
  }, []);
  return (
    <>
      <div id="home" className="home-section section poppins-semibold">
        <div className="hero-tlt-des-con">
          <p className="hero-hi">Hi I am</p>
          <h2>Nichole Chiquira</h2>
          <h1>Front-end Developer</h1>

          <p className="home-des poppins-regular">
            Front-End Web Developer pemula yang menguasai HTML, CSS, JavaScript,
            dan React.js. Memiliki pengalaman mengembangkan website responsif
            serta aktif mengerjakan proyek web untuk meningkatkan kemampuan
            teknis dan problem solving.
          </p>

          <OrangeBtn text="More" width="20px" />
        </div>

        <div className="hero-img-con">
          <img src="/home-profile.jpg"></img>
        </div>
      </div>
    </>
  );
}

export default Home;
