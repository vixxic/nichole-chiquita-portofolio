import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useEffect } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { projects } from "../projectData";

import "../styles/Project.css";
import { IoMdOpen } from "react-icons/io";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function Project() {
  useEffect(() => {
    gsap.from(".project-tlt-des-con h1", {
      y: 80,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".projects-section",
        start: "top 75%",
      },
    });

    gsap.from(".project-des", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      delay: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".projects-section",
        start: "top 75%",
      },
    });

    gsap.from(".project-slider-wrapper", {
      y: 80,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".projects-section",
        start: "top 75%",
      },
    });
  }, []);

  return (
    <div id="project" className="projects-section section poppins-regular">
      <div className="project-tlt-des-con ">
        <h1 className="poppins-medium">My Projects</h1>

        <p className="project-des">
          Kumpulan proyek yang saya kerjakan untuk mengembangkan kemampuan dalam
          front-end development, desain responsif, dan pengalaman pengguna.
        </p>
      </div>

      <div className="project-slider-wrapper">
        <Swiper
          modules={[Navigation]}
          navigation={true}
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="project-card">
                <img src={project.image} alt={project.title} />

                <div className="project-content">
                  <h3>{project.title}</h3>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                    }}
                  >
                    <p>{project.desc}</p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <IoMdOpen size={20} color="#fd6f00" />
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Project;
