import "../styles/Home.css";
import OrangeBtn from "../components/OrangeBtn";

function Home() {
  return (
    <>
      <div className="home-section section poppins-semibold">
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
          <img></img>
        </div>
      </div>
    </>
  );
}

export default Home;
