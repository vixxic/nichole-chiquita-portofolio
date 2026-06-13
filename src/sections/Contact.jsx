import "../styles/Contact.css";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Footer from "./Footer";

function Contact() {
  return (
    <div className="contact-section poppins-regular">
      <h1 className="contact-title poppins-medium">Lets Connect There</h1>

      <p className="contact-subtitle">
        Let's create something meaningful together. Contact me anytime.
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
            <FaInstagram color="#fd6f00 " />
            <FaTiktok color="#fd6f00 " />
            <FaGithub color="#fd6f00 " />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
