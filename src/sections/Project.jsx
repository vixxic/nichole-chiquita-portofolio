import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../styles/Project.css";
import { IoMdOpen } from "react-icons/io";

function Project() {
  const projects = [
    {
      title: "Team.",
      image: "/projects/team.-company.png",
      desc: "Team. company's mock website",
      link: "https://rpl10-final-exam.netlify.app/",
    },
    {
      title: "Cimoly Yogurt Product",
      image: "/projects/cimoly-product-page.png",
      desc: "Cimoly sigle page website",
      link: "https://gsap-nimi-project-2-nichole.netlify.app/",
    },
    {
      title: "Candy Cloud Cup",
      image: "/projects/cloudsip-product-page.png",
      desc: "Cloudsip sigle page website",
      link: "https://candy-cloud-cup.netlify.app/",
    },
    {
      title: "Produx Dashboard",
      image: "/projects/produx-dashboard.png",
      desc: "Simple dashboard",
      link: "https://midterm-project-rpl10-2-nichole.netlify.app/login",
    },
    {
      title: "Portofolio V2",
      image: "/projects/portofolio-v2.png",
      desc: "Portofolio lainya",
      link: " https://project-portofolio-nichole.vercel.app/",
    },
  ];

  return (
    <div className="projects-section section poppins-regular">
      <div className="project-tlt-des-con ">
        <h1 className="poppins-medium">My Projects</h1>

        <p className="project-des">
          Kumpulan proyek yang saya kerjakan untuk mengembangkan kemampuan dalam
          front-end development, desain responsif, dan pengalaman pengguna.
        </p>
      </div>

      <div className="project-slider-wrapper">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
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
                      style={{ alignItems: "center", display: "flex" }}
                      href={project.link}
                      target="_blank"
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
