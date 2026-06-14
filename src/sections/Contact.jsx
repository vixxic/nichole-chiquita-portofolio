import "../styles/Contact.css";
import { useEffect } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Footer from "./Footer";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  useEffect(() => {
    gsap.from(".contact-title", {
      y: 80,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".contact-section",
        start: "top 75%",
      },
    });

    gsap.from(".contact-subtitle", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".contact-section",
        start: "top 75%",
      },
    });

    gsap.from(".contact-card", {
      scale: 0.9,
      opacity: 0,
      duration: 1,
      ease: "back.out(1.2)",
      scrollTrigger: {
        trigger: ".contact-card",
        start: "top 85%",
      },
    });
  }, []);
  return (
    <div id="contact" className="contact-section poppins-regular">
      <h1 className="contact-title poppins-medium">Lets Connect There</h1>

      <p className="contact-subtitle">
        Terima kasih telah mengunjungi portofolio saya. Jangan ragu untuk
        menghubungi saya untuk berdiskusi atau berkolaborasi.
      </p>

      <div className="contact-card">
        <div className="contact-info">
          <p>
            Sekolah Tri Ratna, Jl. Talib I No.35 37, RT.9/RW.7, Krukut, Taman
            Sari, Jakarta Barat, Jakarta 11140
          </p>

          <p>0813-1777-5938</p>
          <p>janikanilobak@gmail.com</p>

          <div className="social-icons">
            <a href="https://www.instagram.com/nicc.ncc/" target="_blank">
              <FaInstagram className="social-icon" color="#fd6f00 " />
            </a>
            <a href="https://www.tiktok.com/@cquita.n" target="_blank">
              <FaTiktok className="social-icon" color="#fd6f00" />
            </a>
            <a href="https://github.com/vixxic" target="_blank">
              <FaGithub className="social-icon" color="#fd6f00 " />
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
