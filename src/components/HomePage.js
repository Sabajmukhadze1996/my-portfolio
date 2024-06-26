import React, { useContext } from "react";
import { Translation } from "./TranslationContextProvider";
import "../css/homepage.css";
import sabaImg from "../images/saba.jpg";
import basLogo from "../images/bas.png";
import { FaReact } from "react-icons/fa";
import { GrNode } from "react-icons/gr";
import { FaLaptop } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaAngular } from "react-icons/fa";
import ContactModal from "./ContactModal";
import Fade from "react-reveal";

const HomePage = () => {
  const { content } = useContext(Translation);

  return (
    <div className="main-homepage-container">
      <div className="react-logo-div">
        <Fade>
          <span className="frameworks-container">
            <FaAngular size={52} id="angular-logo" color="red"/>
            <HiArrowNarrowRight size={24} id="nodejs-logo" color="#999" />
            <FaReact size={52} id="react-logo" color="#61DAFB" />
            <HiArrowNarrowRight size={24} id="nodejs-logo" color="#999" />
            <SiNextdotjs
              style={{
                backgroundColor: "#fff",
                borderRadius: "100%",
                boxShadow: "0px 0px 0px 1px #61DAFB",
              }}
              size={51}
              color="#000A99"
            />
            <HiArrowNarrowRight size={24} id="nodejs-logo" color="#999" />
            <GrNode size={51} id="nodejs-logo" color="#68A063" />
          </span>
        </Fade>
      </div>
      <div className="line-div">
        <div className="line"></div>
      </div>

      <div className="homepage-main-card-div">
        <Fade>
          <img src={sabaImg} alt="my-img" />
        </Fade>

        <Fade bottom>
          <p>
            <FaLaptop id="home-page-welcome-text-logo" fill="orange" />I am Saba
            Jmukhadze, a self-taught developer specializing in Full-Stack Web &
            Mobile development. My expertise encompasses Front-End technologies
            such as Angular, React.js, Next.js, React-Native, and Back-End technologies
            including Node.js. My experience extends across both web and mobile
            platforms.
          </p>
        </Fade>
      </div>
      <div className="contact-line-div">
        <div className="contact-line"></div>
      </div>

      <div className="interestedInContainer">
        <Fade left>
          <h2>Interested in Working Together ?</h2>
        </Fade>
        <Fade top>
          <ContactModal />
        </Fade>
      </div>

      <div className="contact-btn-border-div">
        <span className="contact-btn-border"></span>
      </div>
    </div>
  );
};

export default HomePage;
