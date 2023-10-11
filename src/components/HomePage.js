import React, { useContext } from "react";
import { Translation } from "./TranslationContextProvider";
import "../css/homepage.css";
import myImg from "../images/my-img.webp";
import { FaReact } from "react-icons/fa";
import { GrNode } from "react-icons/gr";
import { IoMdHand } from "react-icons/io";
import { SiNextdotjs } from "react-icons/si";
import { HiArrowNarrowRight } from "react-icons/hi";
import ContactModal from "./ContactModal";
import Fade from "react-reveal";

const HomePage = () => {
  const { content } = useContext(Translation);

  return (
    <div className="main-homepage-container">
      <div className="react-logo-div">
        <Fade>
          <span className="frameworks-container">
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
        <img src={myImg} alt="my-img" />

        <Fade bottom>
          <p>
            <IoMdHand id="home-page-welcome-text-logo" fill="orange" />
            {content.welcome_text_desc}
          </p>
        </Fade>
      </div>
      <div className="contact-line-div">
        <div className="contact-line"></div>
      </div>
      <ContactModal />
      <div className="contact-btn-border-div">
        <span className="contact-btn-border"></span>
      </div>
    </div>
  );
};

export default HomePage;
